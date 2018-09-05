package com.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.utils.PageNameUtil.RESULT;

@Controller
@RequestMapping("/teacher")
public class resultController {

    @RequestMapping("/result")
    public String result(){

        return RESULT;

    }

}
