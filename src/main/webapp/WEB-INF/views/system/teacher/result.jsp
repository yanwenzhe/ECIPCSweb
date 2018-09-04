<%--
  Created by IntelliJ IDEA.
  User: 27758_000
  Date: 2018/9/4
  Time: 19:12
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
    <title>评价结果</title>
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
            <el-aside width="250px" style="background-color: #F3F3FA">

                <el-row class="tac" style="width: 100%;height: 100%">
                    <el-col>
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                                 background-color="#F3F3FA" >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>

            </el-aside>
            <el-main>
                <el-container>
                    <el-header style="text-align: right">
                        <p style="font-size: 15px;display: inline-block">年份：</p>
                        <div style="display: inline-block">
                            <el-date-picker
                                    v-model="value"
                                    type="year"
                                    placeholder="选择年">
                            </el-date-picker>
                        </div>
                        <p style="font-size: 15px;display: inline-block">科目：</p>
                        <div style="display: inline-block">
                            <el-select v-model="value1" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-header>
                    <el-main style="background-color: #B3C0D1;margin-top: 20px" >

                        <div >
                            <template>
                                <el-table
                                        :data="data_list"
                                <%--style="width: 100%;height: 100%;"--%>
                                        stripe="true"
                                        border
                                >
                                    <el-table-column  :label="date" align="center" v-for="(date, key) in header">
                                        <template scope="scope">
                                            {{data_list[scope.$index][key]}}
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>

                    </el-main>
                </el-container>
            </el-main>
        </el-container>
    </el-container>
</div>


<script src="/static/js/teacher/result.js"></script>

</body>
</html>
