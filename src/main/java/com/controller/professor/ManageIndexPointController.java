package com.controller.professor;

import com.utils.PageNameUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("system/professor/")
public class ManageIndexPointController {

    /**
     * 跳转到指标点管理界面
     */
    @RequestMapping("manageIndexPoint")
    public String manage(){
        return PageNameUtil.MANAGE_INDEX_POINT;
    }
}
