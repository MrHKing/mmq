/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.monkey.mmq.notifier;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.monkey.mmq.config.Loggers;
import org.monkey.mmq.config.driver.DriverFactory;
import org.monkey.mmq.config.driver.MysqlDriver;
import org.monkey.mmq.config.matedata.RuleEngineMateData;
import org.monkey.mmq.config.service.RuleEngineService;
import org.monkey.mmq.core.consistency.notifier.ValueChangeEvent;
import org.monkey.mmq.core.notify.Event;
import org.monkey.mmq.core.notify.NotifyCenter;
import org.monkey.mmq.core.notify.listener.Subscriber;
import org.monkey.mmq.core.utils.JacksonUtils;
import org.monkey.mmq.protocol.Connect;
import org.monkey.mmq.rule.engine.ReactorQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.common.TemplateParserContext;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import javax.annotation.PostConstruct;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author solley
 */
@Component
public final class RuleEngineManager extends Subscriber<RuleEngineEvent> {

    @Autowired
    MysqlDriver mysqlDriver;

    private final int queueMaxSize = 65539;

    @Autowired
    RuleEngineService ruleEngineService;

    @PostConstruct
    public void init() {
        NotifyCenter.registerToPublisher(RuleEngineEvent.class, queueMaxSize);
        NotifyCenter.registerSubscriber(this);
    }

    @Override
    public void onEvent(RuleEngineEvent event) {
        //List<RuleEngineMateData> ruleEngineMateDataList = ruleEngineService.getAllRuleEngine().values().stream().filter(x->x.getEnable()).collect(Collectors.toList());
        Collection<RuleEngineMateData> ruleEngineMateDataList = ruleEngineService.getAllRuleEngine().values();
        if (ruleEngineMateDataList.size() == 0) return;
        ruleEngineMateDataList.forEach(rule -> {

            // 获得引擎的SQL，进行处理
            ReactorQL.builder()
                    .sql(rule.getSql())
                    .build()
                    .start(name -> event.getMessage().getTopic().startsWith(name.split("#")[0]) ?
                            Flux.just((new ObjectMapper().convertValue(JacksonUtils.toObj(new String(event.getMessage().getMessageBytes().toByteArray())),Map.class))) : Flux.just())
                    .doOnNext(map -> {
                        // 如果不为空则触发响应
                        if (map != null && rule.getResourcesMateDatas().size() != 0) {
                            this.setProperty(map);

                            // 根据规则获得规则的响应
                            rule.getResourcesMateDatas().forEach(resource -> {
                                Object driver = null;
                                try {
                                    driver = DriverFactory.getResourceDriverByEnum(resource.getType()).getDriver(resource.getResourceID());
                                } catch (Exception e) {
                                    Loggers.BROKER_SERVER.error(e.getMessage());
                                }
                                switch (resource.getType()) {
                                    case POSTGRESQL:
                                    case MYSQL:
                                    case SQLSERVER:
                                        try {
                                            Connection connection = (Connection)driver;
                                            if (connection != null) {
                                                String sql = resource.getResource().get("sql").toString();
                                                ExpressionParser parser = new SpelExpressionParser();
                                                TemplateParserContext parserContext = new TemplateParserContext();
                                                String content = parser.parseExpression(sql, parserContext).getValue(map, String.class);
                                                connection.createStatement().execute(content);
                                                connection.close();
                                            }
                                        } catch (Exception e) {
                                            Loggers.BROKER_SERVER.error(e.getMessage());
                                        }
                                        break;
                                    case TDENGINE:

                                        break;
                                    case INFLUXDB:
                                    case KAFKA:
                                        try {
                                            Producer<String, String> producer = (Producer<String, String>)driver;
                                            Map<String, Object> payload = new HashMap<>();
                                            payload.put("topic", event.getMessage().getTopic());
                                            payload.put("payload", map);
                                            payload.put("address", event.getMessage().getAddress());
                                            payload.put("qos", event.getMessage().getMqttQoS());
                                            producer.send(new ProducerRecord<>(resource.getResource().get("topic").toString(), JacksonUtils.toJson(payload)));
                                        } catch (Exception e) {
                                            Loggers.BROKER_SERVER.error(e.getMessage());
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            });
                        }
                    }).subscribe();

        });
    }

    @Override
    public Class<? extends Event> subscribeType() {
        return RuleEngineEvent.class;
    }

    private void setProperty(Map property) {
        property.put("uuid", UUID.randomUUID().toString());

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        property.put("date", sdf.format(date));
        sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        property.put("datetime", sdf.format(date));
        sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");
        property.put("utc", sdf.format(date));

    }
}
