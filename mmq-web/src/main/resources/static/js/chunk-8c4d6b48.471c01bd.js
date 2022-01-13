(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c4d6b48"],{"02f1":function(e,r,t){},"0fea":function(e,r,t){"use strict";t.d(r,"c",(function(){return s})),t.d(r,"d",(function(){return n})),t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return i}));var a=t("b775");function s(e,r){return Object(a["b"])({url:e,method:"post",data:r})}function n(e,r){return Object(a["b"])({url:e,method:"put",data:r})}function o(e,r){return Object(a["b"])({url:e,method:"get",params:r})}function i(e,r){return Object(a["b"])({url:e,method:"delete",params:r})}},5159:function(e,r,t){"use strict";t("02f1")},"7a56":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-operator"}),t("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},loading:e.loading,"data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(r){return t("a-list-item",{},[r&&void 0!==r.resourceID?[t("a-card",{attrs:{title:r.title}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(r.resourceID))]),t("a",{attrs:{slot:"actions"},on:{click:function(t){return e.handleSave(r)}},slot:"actions"},[e._v("编辑")]),t("a-popconfirm",{attrs:{slot:"actions",title:"Sure to delete?"},on:{confirm:function(){return e.handleDelete(r)}},slot:"actions"},[t("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]),e._v(" "+e._s(e.getDescription(r))+" ")],1)]:[t("a-button",{staticClass:"new-btn",attrs:{type:"dashed"},on:{click:function(r){return e.handleSave({})}}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 新增资源 ")],1)]],2)}}])}),t("ResourceModel",{ref:"ResourceModel",on:{ok:e.loadData}})],1)},s=[],n=t("0fea"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-drawer",{attrs:{confirmLoading:e.confirmLoading,title:"保存新资源",width:720,visible:e.visible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[t("a-form",{attrs:{form:e.form,layout:"vertical","hide-required-mark":""}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"资源类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择资源类型"}]}],expression:"[\n              'type',\n              {\n                rules: [{ required: true, message: '请选择资源类型' }]\n              }\n            ]"}],attrs:{placeholder:"请选择资源类型"},on:{change:e.typeChange}},[t("a-select-option",{attrs:{value:"MYSQL"}},[e._v(" Mysql ")]),t("a-select-option",{attrs:{value:"POSTGRESQL"}},[e._v(" Postgresql ")]),t("a-select-option",{attrs:{value:"SQLSERVER"}},[e._v(" SqlServer ")]),t("a-select-option",{attrs:{value:"TDENGINE"}},[e._v(" Tdengine ")]),t("a-select-option",{attrs:{value:"KAFKA"}},[e._v(" Kafka ")]),t("a-select-option",{attrs:{value:"MQTT_BROKER"}},[e._v(" MQTT Broker ")])],1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"测试连接"}},[t("a-button",{style:{marginRight:"8px"},attrs:{type:"primary"},on:{click:e.handleConnect}},[e._v(" Test Connect ")])],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,expression:"type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'"}]},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"IP"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.ip",{rules:[{required:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,message:"请输入IP"}]}],expression:"[\n                'resource.ip',\n                {\n                  rules: [\n                    {\n                      required:\n                        type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'\n                          ? true\n                          : false,\n                      message: '请输入IP'\n                    }\n                  ]\n                }\n              ]"}],attrs:{placeholder:"请输入IP"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"PORT"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.port",{rules:[{required:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,message:"请输入端口"}]}],expression:"[\n                'resource.port',\n                {\n                  rules: [\n                    {\n                      required:\n                        type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'\n                          ? true\n                          : false,\n                      message: '请输入端口'\n                    }\n                  ]\n                }\n              ]"}],attrs:{placeholder:"请输入端口"}})],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"账户"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.username",{rules:[{required:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,message:"请输入账户"}]}],expression:"[\n                'resource.username',\n                {\n                  rules: [\n                    {\n                      required:\n                        type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'\n                          ? true\n                          : false,\n                      message: '请输入账户'\n                    }\n                  ]\n                }\n              ]"}],attrs:{placeholder:"请输入账户"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"密码"}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.password",{rules:[{required:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,message:"请输入密码"}]}],expression:"[\n                'resource.password',\n                {\n                  rules: [\n                    {\n                      required:\n                        type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'\n                          ? true\n                          : false,\n                      message: '请输入密码'\n                    }\n                  ]\n                }\n              ]"}],attrs:{placeholder:"请输入密码"}})],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"数据库"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.databaseName",{rules:[{required:"MYSQL"===e.type||"POSTGRESQL"===e.type||"SQLSERVER"===e.type||"TDENGINE"===e.type,message:"请输入要连接的数据库"}]}],expression:"[\n                'resource.databaseName',\n                {\n                  rules: [\n                    {\n                      required:\n                        type === 'MYSQL' || type === 'POSTGRESQL' || type === 'SQLSERVER' || type === 'TDENGINE'\n                          ? true\n                          : false,\n                      message: '请输入要连接的数据库'\n                    }\n                  ]\n                }\n              ]"}],attrs:{placeholder:"请输入要连接的数据库"}})],1)],1),t("a-col",{attrs:{span:12}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"KAFKA"===e.type,expression:"type === 'KAFKA'"}]},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Kafka服务"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.server",{rules:[{required:"KAFKA"===e.type,message:"请输入Kafka服务"}]}],expression:"[\n                'resource.server',\n                {\n                  rules: [{ required: type === 'KAFKA' ? true : false, message: '请输入Kafka服务' }]\n                }\n              ]"}],attrs:{placeholder:"请输入Kafka服务"}})],1)],1),t("a-col",{attrs:{span:12}})],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Kafka账户"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.username",{rules:[{required:!1,message:"请输入Kafka账户"}]}],expression:"[\n                'resource.username',\n                {\n                  rules: [{ required: false, message: '请输入Kafka账户' }]\n                }\n              ]"}],attrs:{placeholder:"请输入Kafka账户"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Kafka密码"}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.password",{rules:[{required:!1,message:"请输入Kafka密码"}]}],expression:"[\n                'resource.password',\n                {\n                  rules: [{ required: false, message: '请输入Kafka密码' }]\n                }\n              ]"}],attrs:{placeholder:"请输入Kafka密码"}})],1)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"MQTT_BROKER"===e.type,expression:"type === 'MQTT_BROKER'"}]},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"MQTT服务"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.server",{rules:[{required:"MQTT_BROKER"===e.type,message:"请输入MQTT服务"}]}],expression:"[\n                'resource.server',\n                {\n                  rules: [{ required: type === 'MQTT_BROKER' ? true : false, message: '请输入MQTT服务' }]\n                }\n              ]"}],attrs:{placeholder:"请输入MQTT服务"}})],1)],1),t("a-col",{attrs:{span:12}})],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"MQTT账户"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.username",{rules:[{required:!1,message:"请输入Kafka账户"}]}],expression:"[\n                'resource.username',\n                {\n                  rules: [{ required: false, message: '请输入Kafka账户' }]\n                }\n              ]"}],attrs:{placeholder:"请输入MQTT账户"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"MQTT密码"}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["resource.password",{rules:[{required:!1,message:"请输入MQTT密码"}]}],expression:"[\n                'resource.password',\n                {\n                  rules: [{ required: false, message: '请输入MQTT密码' }]\n                }\n              ]"}],attrs:{placeholder:"请输入MQTT密码"}})],1)],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"备注"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1,message:"请输入备注"}]}],expression:"[\n              'description',\n              {\n                rules: [{ required: false, message: '请输入备注' }]\n              }\n            ]"}],attrs:{rows:4,placeholder:"请输入备注"}})],1)],1)],1)],1),t("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[t("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" Cancel ")]),t("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v(" Submit ")])],1)],1)},i=[],c=(t("a4d3"),t("e01a"),t("d3b7"),{data:function(){return{title:"操作",visible:!1,curResourceID:null,confirmLoading:!1,type:"",form:this.$form.createForm(this),url:{save:"/v1/resources",testConnect:"/v1/resources/testConnect"}}},created:function(){},methods:{save:function(e){this.form.resetFields(),this.visible=!0,e&&(this.curResourceID=e.resourceID,this.setFieldsValueByType(e.type,e))},setFieldsValueByType:function(e,r){var t=this;switch(this.type=e,e){case"MYSQL":case"POSTGRESQL":case"SQLSERVER":case"TDENGINE":this.$nextTick((function(){t.form.setFieldsValue({resourceID:r.resourceID,type:e,description:r.description,resource:{ip:r.resource.ip,port:r.resource.port,databaseName:r.resource.databaseName,password:r.resource.password,username:r.resource.username}})}));break;case"KAFKA":this.$nextTick((function(){t.form.setFieldsValue({resourceID:r.resourceID,type:e,description:r.description,resource:{server:r.resource.server,password:r.resource.password,username:r.resource.username}})}));break}},typeChange:function(e){this.type=e},onClose:function(){this.visible=!1},handleOk:function(){var e=this,r=this;this.form.validateFields((function(t,a){if(!t){r.confirmLoading=!0;var s=Object.assign({},a);s.resourceID=e.curResourceID;var o=Object(n["c"])(e.url.save,s);o.then((function(e){200===e.code?(r.$message.success(e.message),r.$emit("ok")):r.$message.warning(e.message)})).finally((function(){r.confirmLoading=!1,r.onClose()}))}}))},handleConnect:function(){var e=this,r=this;this.form.validateFields((function(t,a){if(!t){var s=Object.assign({},a);s.resourceID=e.curResourceID,Object(n["c"])(e.url.testConnect,s).then((function(e){200===e.code?r.$message.success("连接成功！"):r.$message.warning("连接失败！")}))}}))},filterOption:function(e,r){return!!r.componentOptions.children[0].text&&r.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleCancel:function(){this.onClose()}}}),u=c,l=t("2877"),p=Object(l["a"])(u,o,i,!1,null,"b6b28234",null),d=p.exports,m={name:"Subscribes",components:{ResourceModel:d},data:function(){return{loading:!0,data:[]}},filters:{},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0,setTimeout((function(){return Object(n["b"])("/v1/resources/resources",{}).then((function(r){e.data=r.data,e.data.unshift({}),e.loading=!1}))}),1e3)},getDescription:function(e){return"资源ID:"+e.resourceID+" 资源类型:"+e.type+this.getResourceContentByType(e.resource,e.type)},getResourceContentByType:function(e,r){switch(r){case"MYSQL":return" ip:"+e.ip+" port:"+e.port+" 数据库名称:"+e.databaseName;case"POSTGRESQL":return" ip:"+e.ip+" port:"+e.port+" 数据库名称:"+e.databaseName;case"SQLSERVER":return" ip:"+e.ip+" port:"+e.port+" 数据库名称:"+e.databaseName;case"TDENGINE":return" ip:"+e.ip+" port:"+e.port+" 数据库名称:"+e.databaseName;case"KAFKA":return" Kafka服务:"+e.server;case"MQTT_BROKER":return" MQTT BROKER服务:"+e.server;default:return""}},handleSave:function(e){this.$refs.ResourceModel.save(e)},handleDelete:function(e){var r=this;Object(n["a"])("/v1/resources",{resourceID:e.resourceID}).then((function(e){200===e.code?(r.$message.info(e.message),r.loadData()):r.$message.info(e.message)}))}}},f=m,v=(t("5159"),Object(l["a"])(f,a,s,!1,null,"74e8e50e",null));r["default"]=v.exports}}]);