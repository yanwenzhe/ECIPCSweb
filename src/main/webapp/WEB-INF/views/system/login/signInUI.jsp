<%--
  Created by IntelliJ IDEA.
  User: Yan
  Date: 2018/9/3
  Time: 16:29
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>


<html>
<head>
    <%@include file="/WEB-INF/views/include/adminlteBlankHead.jsp" %>
    <%@include file="/WEB-INF/views/include/adminlteBlankScript.jsp" %>
    <title>$Title$</title>

</head>
<body>
<style>
    .blur {-webkit-filter: blur(4px);filter: blur(4px) ;width:100%;height:100%;position:absolute;z-index: -1;left:0px;
        top:0px;}
    .through {
        background-color:#000000;  opacity:0.5; margin-left: 40%;width: 200px;height:135px;z-index:1;border-radius:15px;border:1px solid #000000;}

</style>
<div style="width:100%;height:100%;" id="app">
    <div style="height:30%"></div>
    <div class="through">
        <div style="margin-top: 20px;width:80%;margin-left:10%">
            <i-input  placeholder="username" size="small"></i-input>

        </div>
        <div style="margin-top: 8px;width:80%;margin-left:10%">
            <i-input type="password" placeholder="password" size="small"></i-input>
        </div>
        <div style="margin-top: 13px;width:80%;margin-left:10%">
            <i-button slot="append" type="primary" size="small" ghost long @click="load()">登 录</i-button>
        </div>
    </div>
    <img src="/static/image/BIT.jpg" class="blur">

</div>


<script>
    var vue=new Vue({
        el:'#app',
        data:{

            username:'',
            password:''
        },
        methods:{
            load(){
                window.location.href="/teacher/courseView";
            }

        }

    });

</script>
</body>

</html>
