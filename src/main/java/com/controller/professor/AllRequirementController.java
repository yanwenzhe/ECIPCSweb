package com.controller.professor;

import com.utils.PageNameUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("system/professor/")
public class AllRequirementController {

    /**
     * 跳转到查看所有指标要求的界面
     */
    @RequestMapping("allRequirement")
    public String manage(){
        return PageNameUtil.ALL_REQUIREMENT;
    }
}
