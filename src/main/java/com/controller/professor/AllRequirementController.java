package com.controller.professor;

import com.dao.IndexRequirementDao;
import com.entity.IndexRequirement;
import com.utils.PageNameUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("system/professor/")
public class AllRequirementController {
    @Autowired
    private IndexRequirementDao indexRequirementDao;

    /**
     * 跳转到查看所有指标要求的界面
     */
    @RequestMapping("allRequirement")
    public String manage(){
        return PageNameUtil.ALL_REQUIREMENT;
    }

    @RequestMapping(value = "getList",method = RequestMethod.GET)
    @ResponseBody
    public Object getAllRequirements()
    {

      List<IndexRequirement> list = indexRequirementDao.getAllRequirements();
      return list;
    }
}
