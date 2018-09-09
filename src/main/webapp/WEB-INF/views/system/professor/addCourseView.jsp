<%--
  Created by IntelliJ IDEA.
  User: Yan
  Date: 2018/9/7
  Time: 9:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>

<html>
<head>
    <%@include file="/WEB-INF/views/include/adminlteBlankHead.jsp" %>
    <%@include file="/WEB-INF/views/include/adminlteBlankScript.jsp" %>


    <title>添加课程</title>
    <style>
        .centerContent{
            margin-top: 8px;
            margin-left:8px;
            margin-right: 8px;
            background-color:#B3C0D1;
            overflow: auto;
        }
        .backGroundWidth{
            width: 100%;
            overflow: auto;
        }

    </style>
</head>
<body>

<div id="app" >
    <div class="layout">
        <Layout>
            <i-header theme="theme2"  >
                <image src="/static/image/Fate.png" style="width: 80px;height: 40px;float: left;margin-top: 15px;"></image>
                <p style="font-size: 30px;font-family: STXinwei;margin-top: 2px;color:navajowhite;float: left;">工程认证指标点计算系统</p>

                <div style="float: right;margin-top: 2px; color:navajowhite">
                    欢迎您！${username}&nbsp;&nbsp;
                    <i-button size="small" type="info"><a href="/system/login/returnLogin">退出</a></i-button>
                </div>
            </i-header>
            <Layout>
                <Sider hide-trigger :style="{background:'#CCCCFF'}">
                    <i-menu active-name="1-1" theme="blue" width="auto" :open-names="['1']" :style="{background:'#CCCCFF'}">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                管理
                            </template>
                            <menu-item name="1-1"><a href="/system/professor/manageIndexPoint">指标点管理</a></menu-item>
                            <menu-item  name="1-2"><a href="/system/professor/manageCourse">课程管理</a></menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                达成度计算
                            </template>
                            <menu-item name="2-1"><a href="/system/professor/valueCalculated">毕业达成度计算</a></menu-item>
                            <menu-item  name="2-2"><a href="/system/professor/valueChart">毕业达成度图形化</a></menu-item>
                        </Submenu>
                    </i-menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">

                    <Breadcrumb :style="{margin:'24px 0'}">
                        <breacrum-item>管理</breacrum-item>&nbsp;/&nbsp;
                        <breacrum-item>课程管理</breacrum-item>&nbsp;/&nbsp;
                        <breacrum-item>添加课程</breacrum-item>
                    </Breadcrumb>
                    <i-content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

                        <%--这里面写内容，侧边栏要改的东西有active-name和<a>标签条跳转--%>

                        <div class="centerContent">
                            <div class="backGroundWidth">
                                <div style="margin-top: 12px;margin-bottom: 12px">
                                    <i-button type="success" style="margin-left: 30px;">返回</i-button>
                                    <i-select  v-model="indexPointId"
                                               style="float:right;width:150px;margin-right: 30px;"
                                               :on-change="indexPointIdChange()">
                                        <i-option v-for="item in indexPointList " :value="item.id" :key="item.name">
                                            {{item.name}}
                                        </i-option>
                                    </i-select>
                                    <p style="margin-right:5px;float: right; font-size:15px;margin-top: 4px">请选择指标点</p>
                                    <i-select  v-model="requirementId"
                                               style="float:right;width:150px;margin-right: 30px;"
                                               :on-change="requirementIdChange()">
                                        <i-option v-for="item in requirementList " :value="item.id" :key="item.name">
                                            {{item.name}}
                                        </i-option>
                                    </i-select>
                                    <p style="margin-right:5px;float: right; font-size:15px;margin-top: 4px">请选择毕业要求</p>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="centerContent">
                            <div class="backgroundWidth" >
                                <div style="margin-top: 20px;margin-bottom: 12px;margin-left:30px;margin-right: 30px">
                                    <i-form :model="formCourse" :label-width="80">
                                        <form-item label="课程名">
                                            <i-input v-model="formCourse.name"></i-input>
                                        </form-item>
                                        <form-item label="课程描述">
                                            <i-input v-model="formCourse.desc" type="textarea" :rows="4"></i-input>
                                        </form-item>
                                        <form-item label="指标点">
                                            <i-button>
                                                添加指标点支撑系数
                                            </i-button>
                                            <%--显示添加的指标点支撑系数--%>
                                            <table class="table  table-bordered table-hover">
                                                <tbody>
                                                <tr v-for="item in formCourse.selectIndexPointList">
                                                    <td>{{item.id}}</td>
                                                    <td>{{item.name}}</td>
                                                    <td v-if="item.supportDegree=='H'">
                                                        {{item.supportDegree}}/{{item.supportFactor}}
                                                    </td>
                                                    <td v-else>
                                                        {{item.supportDegree}}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </form-item>
                                        <form-item label="年份">
                                            <date-picker type="year" v-model="formCourse.year"
                                                         style="width: 200px"
                                                         clearable="false"
                                                         on-change="yearChange(formCourse.year)">
                                            </date-picker>
                                        </form-item>
                                        <form-item label="教师">
                                            <i-select  v-model="formCourse.selectTeacherList"
                                                       style="width:150px;"
                                                       multiple>
                                                <i-option v-for="item in teacherList " :value="item.id" :key="item.name">
                                                    {{item.name}}
                                                </i-option>
                                            </i-select>
                                        </form-item>
                                        <form-item>
                                            <i-button type="primary">
                                                确认添加
                                            </i-button>
                                        </form-item>
                                    </i-form>

                                </div>
                            </div>
                        </div>

                    </i-content>

                </Layout>
            </Layout>
        </Layout>

    </div>

</div>


<script>
    var vue = new Vue({
        el:"#app",
        data:{
            formCourse:{
                name:'',
                desc:'',
                year:'',
                selectIndexPointList:[],
                selectTeacherList:[]
            },
            indexPointDesc:'',
            indexPointId:'001',
            indexPoint:'',
            indexPointList:[{
                id:'001',
                indexPoint:'1.1',
                yearStart:'2018',
                yearEnd:'2020',
                description:"这个指标1.1描述只这样的"
            },{
                id:'002',
                indexPoint:'1.2',
                yearStart:'2018',
                yearEnd:'2020',
                description:"这个指标1.2描述只这样的"
            }],
            courseList:[{
                id:'2018001',
                name:'《工科数学分析》',
                supportDegree:'H',
                supportFactor:0.3
            },{
                id:'2018002',
                name:'《线性代数》',
                supportDegree:'H',
                supportFactor:0.3
            },{
                id:'2018003',
                name:'《大学物理》',
                supportDegree:'H',
                supportFactor:0.4
            },{
                id:'2018004',
                name:'《物理实验》',
                supportDegree:'M',
                supportFactor:0
            }],
            requirementId:"1",
            requirementName:'毕业要求1',
            requirementDesc:'这个指标描述只这样的',
            requirementList:[{
                id:'1',
                name:"毕业要求1",
                desc:"这个毕业要求1描述只这样的"
            },{
                id:'2',
                name:"毕业要求2",
                desc:"这个毕业要求1描述只这样的"
            }],
            teacherList:[{
                id:'01',
                name:'孙骁骁'
            },{
                id:'02',
                name:'赵yiyi'
            }]

        },
        methods:{
            indexPointIdChange(){
                for(var i=0;i<this.indexPointList.length;i++){
                    if(this.indexPointList[i].id==this.indexPointId){
                        this.indexPoint=this.indexPointList[i].indexPoint;
                        this.indexPointDesc=this.indexPointList[i].description;
                    }
                }
            },
            requirementIdChange(){
                for(var i=0;i<this.requirementList.length;i++){
                    if(this.requirementList[i].id==this.requirementId){
                        //此处获取后台的对应的毕业要求的指标点
                    }
                }
            },
            yearChange(){
                //此处获取相应年份的老师
            },
            allCourse(){
                window.location.href='/system/professor/allCourse';
            }
        },
    })

</script>

</body>
</html>

