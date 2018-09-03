package com.controller.teacher;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.utils.PageName.COURSEVIEW;

@Controller
@RequestMapping("/teacher")
public class courseViewController {

    @RequestMapping("/courseView")
    public String courseView(){

        return COURSEVIEW;

    }

}
