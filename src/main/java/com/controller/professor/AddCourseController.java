package com.controller.professor;

import com.dao.CourseDao;
import com.dao.RelatedIndexPointCourseDao;
import com.entity.Course;
import com.entity.RelatedIndexPointCourse;
import com.utils.AjaxMessge;
import com.utils.MsgType;
import com.utils.PageNameUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("system/professor/")
public class AddCourseController {

    @Autowired
    private RelatedIndexPointCourseDao relatedIndexPointCourseDao;

    @Autowired
    private CourseDao courseDao;

    /**
     * 跳转到添加课程界面
     */
    @RequestMapping("addCourse")
    public String manage(){
        return PageNameUtil.ADD_COURSE_VIEW;
    }

    /**
     * 根据指标点id和年份得到所有的相关课程及其系数
     * @param indexPointId
     * @return
     */
    @RequestMapping("getCourseListByIndexPointId")
    @ResponseBody
    public Object getCourse(@RequestParam("indexPointId") String indexPointId,@RequestParam("year") String year){
        if(indexPointId=="") indexPointId=null;
        RelatedIndexPointCourse relatedIndexPointCourse=new RelatedIndexPointCourse(null,indexPointId,null,0.0,null,0.0,null,null);
        List<RelatedIndexPointCourse> list=relatedIndexPointCourseDao.getRelatedIndexPointCourse(relatedIndexPointCourse);
        List<RelatedIndexPointCourse> list2=new ArrayList<>();

        for(RelatedIndexPointCourse relatedIndexPointCourse1:list){
            System.out.println("id: "+relatedIndexPointCourse1.getCourseId()+" factor: "+relatedIndexPointCourse1.getSupportFactor());
            String courseId=relatedIndexPointCourse1.getCourseId();
            String courseName=null;
            String courseYear=null;
            List<Course> course=courseDao.getCourse(new Course(courseId,null,null,null));
            for(Course cos:course){
                    courseName = cos.getName();
                    courseYear=cos.getYear();
                    break;
            }
            if(courseYear.equals(year)){
                relatedIndexPointCourse1.setTeachingContent(courseName);
                list2.add(relatedIndexPointCourse1);
            }
        }
        HashMap<String ,Object> hashMap=new HashMap<>();
        hashMap.put("list",list2);
        hashMap.put("success","success");
        return new AjaxMessge().Set(MsgType.Success,hashMap);
    }


    /**
     * 保存已经修改的课程的支撑系数
     * @param jsonObject
     * @return
     */
    @RequestMapping("updateCourseIndexPointRelated")
    @ResponseBody
    public Object update(@RequestBody JSONObject jsonObject) {
        JSONArray jsonArray1 = jsonObject.getJSONArray("courseList");
        for (Object obj : jsonArray1) {
            JSONObject jsonObject1 = (JSONObject) obj;
            String id = jsonObject1.getString("id");
            Double factor = jsonObject1.getDouble("supportFactor");
            RelatedIndexPointCourse relatedIndexPointCourse = new RelatedIndexPointCourse(id, null, null, factor, null, 0.0, null, null);
            relatedIndexPointCourseDao.updateRelatedIndexPointCourse(relatedIndexPointCourse);
        }
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("success", "success");
        return new AjaxMessge().Set(MsgType.Success, hashMap);
    }
}
