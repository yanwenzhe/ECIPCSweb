package com.controller.teacher;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.utils.PageNameUtil.GRADEREVIEW;

@Controller
@RequestMapping("/teacher")
public class GradeReview {

    @RequestMapping("/gradeReview")
    public String gradeReview(){

        return GRADEREVIEW;

    }

}
