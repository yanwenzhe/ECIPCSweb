package com.controller.professor;

import com.utils.PageNameUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("system/professor/")
public class AddCourseController {

    /**
     * 跳转到添加课程界面
     */
    @RequestMapping("addCourse")
    public String manage(){
        return PageNameUtil.ADD_COURSE_VIEW;
    }

}
