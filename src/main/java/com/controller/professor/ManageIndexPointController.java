package com.controller.professor;

import com.dao.IndexPointDao;
import com.entity.IndexPoint;
import com.utils.AjaxMessge;
import com.utils.GuidUtil;
import com.utils.MsgType;
import com.utils.PageNameUtil;
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
public class ManageIndexPointController {

    @Autowired
    private IndexPointDao indexPointDao;

    /**
     * 跳转到指标点管理界面
     */
    @RequestMapping("manageIndexPoint")
    public String manage(){
        return PageNameUtil.MANAGE_INDEX_POINT;
    }


    /**
     * 添加指标点
     * @param indexPintId
     * @param point
     * @param yearStart
     * @param yearEnd
     * @param description
     */
    @RequestMapping(value = "addIndexPoint", method = RequestMethod.POST)
    @ResponseBody
    public void addIndexPoint(@RequestParam("indexPointId") String indexPintId,
                              @RequestParam("point") String point,
                              @RequestParam("yearStart") String yearStart,
                              @RequestParam("yearEnd") String yearEnd,
                              @RequestParam("description") String description)
    {
        //随机id
        String id = GuidUtil.getGuid();
        IndexPoint indexPoint = new IndexPoint(id,indexPintId,point,yearStart,yearEnd,description);
        indexPointDao.addIndexPoint(indexPoint);
    }


    /**
     * 修改指标点的描述
     * @param id
     * @param description
     */
    @RequestMapping(value = "updateIndexPoint",method = RequestMethod.POST)
    @ResponseBody
    public void updateIndexPoint(@RequestParam("id") String id,
                                 @RequestParam("description") String description)
    {
        IndexPoint indexPoint = new IndexPoint(id,"","","","",description);
        indexPointDao.updateIndexPoint(indexPoint);
    }

    /**
     * 通过指标要求查询指标点信息
     * @param indexRequirement
     * @return
     */
    @RequestMapping(value = "getIndexPointByIndexRequirement",method = RequestMethod.POST)
    @ResponseBody
    public Object getIndexPointByIndexRequirement(@RequestParam("indexRequirement") String indexRequirement)
    {
        IndexPoint indexPoint = new IndexPoint("",indexRequirement,"","","","");
        List<IndexPoint> list = indexPointDao.getIndexPoint(indexPoint);
        HashMap<String ,Object> hashMap=new HashMap<>();
        hashMap.put("list",list);
        return new AjaxMessge().Set(MsgType.Success,hashMap);
    }
}
