package com.controller.professor;

import com.dao.IndexRequirementDao;
import com.entity.IndexRequirement;
import com.utils.AjaxMessge;
import com.utils.MsgType;
import com.utils.PageNameUtil;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
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

    /**
     * get请求获取所有的指标要求
     * @return
     */
    @RequestMapping(value = "getList",method = RequestMethod.GET)
    @ResponseBody
    public Object getAllRequirements()
    {
      List<IndexRequirement> list = indexRequirementDao.getAllRequirements();
      HashMap<String ,Object> hashMap=new HashMap<>();
      hashMap.put("list",list);
      return new AjaxMessge().Set(MsgType.Success,hashMap);
    }


    /**
     * post修改指标要求的描述
     * @param id
     * @param description
     * @return
     */
    @RequestMapping(value = "updateList", method = RequestMethod.POST)
    @ResponseBody
    public void updateRequirement(@RequestParam("id") String id,
            @RequestParam("description") String description)
    {
        IndexRequirement indexRequirement = new IndexRequirement(id,"",description);
        indexRequirementDao.updateIndexRequirement(indexRequirement);
    }
}
