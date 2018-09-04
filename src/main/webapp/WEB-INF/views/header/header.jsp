<%--
  Created by IntelliJ IDEA.
  User: Yan
  Date: 2018/9/4
  Time: 14:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
    <title>Title</title>
    <%@include file="/WEB-INF/views/include/adminlteBlankHead.jsp" %>
</head>
<body>

<div id="app">
    <div class="layout">
        <i-layout>
            <i-header>
                <h1>工程认证指标点计算系统</h1>
            </i-header>
            <i-layout>
                <i-sider hide-trigger :style="{background: '#fff'}">
                    <i-menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <sub-menu name="1">
                            <Icon type="ios-navigate"></Icon>
                                Item 1
                            <menu-item name="1-1">Option 1</menu-item>
                            <menu-item  name="1-2">Option 2</menu-item >
                            <menu-item name="1-3">Option 3</menu-item>
                        </sub-menu>
                    </i-menu>
                </i-sider>
            </i-layout>
        </i-layout>

    </div>
</div>
<%@include file="/WEB-INF/views/include/adminlteBlankScript.jsp" %>
<script>
    var vue=new Vue({
        el:"#app",
        data:{}
    })
</script>
</body>
</html>
