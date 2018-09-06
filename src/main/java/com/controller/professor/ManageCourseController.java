package com.controller.professor;


import com.utils.PageNameUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("system/professor/")
public class ManageCourseController {

    /**
     * 跳转管理课程界面
     */
    @RequestMapping("manageCourse")
    public String manage(){
        return PageNameUtil.MANAGE_COURSE;
    }
}
