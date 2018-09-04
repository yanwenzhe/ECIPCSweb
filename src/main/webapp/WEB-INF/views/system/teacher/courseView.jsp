<%--
  Created by IntelliJ IDEA.
  User: 27758_000
  Date: 2018/9/3
  Time: 20:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>

<html>
<head>
    <%@include file="/WEB-INF/views/include/adminlteBlankHead.jsp" %>
    <%@include file="/WEB-INF/views/include/adminlteBlankScript.jsp" %>

    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <style>
        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }

        body > .el-container {
            margin-bottom: 40px;
        }

        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            line-height: 260px;
        }

        .el-container:nth-child(7) .el-aside {
            line-height: 320px;
        }
    </style>
    <title>课程查看</title>
</head>
<body>

    <div id="test" style="height: 100%;width: 100%">
        <el-container style="height: 100%;width: 100%">
            <el-header height="100px" style="text-align: left;">
                <div style="display: inline-block;">
                    <image src="/static/image/Fate.png" style="width: 140px;height: 80px;display: inline-block;"></image>
                    <p style="display: inline-block;margin-left: 30px; font-size: 40px;font-family: STXinwei;margin-top: 20px" >工程认证指标点系统</p>
                </div>
                <div style="float: right;margin-top: 30px">
                    <el-button type="danger">退出</el-button>
                </div>

            </el-header>
            <el-container>
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>


    <script src="/static/js/teacher/courseView.js"></script>

</body>
</html>
