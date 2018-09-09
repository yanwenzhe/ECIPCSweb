package com.controller.teacher;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.utils.PageNameUtil.COURSEVIEW;

@Controller
@RequestMapping("/teacher")
public class CourseViewController {

    @RequestMapping("/courseView")
    public String courseView(){

        return COURSEVIEW;

    }

}
