package org.monkey.mmq.config.driver;

import org.monkey.mmq.config.matedata.ResourcesMateData;

import java.sql.SQLException;
import java.util.Map;

public interface ResourceDriver<T> {

    void addDriver(String resourceId, Map<String, Object> resource);

    void deleteDriver(String resourceId);

    T getDriver(String resourceId) throws Exception;

    boolean testConnect(ResourcesMateData resourcesMateData);
}
