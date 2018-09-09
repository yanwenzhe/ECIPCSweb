package com.controller.teacher;


import com.dao.CourseDao;
import com.dao.StudentScoreDao;
import com.entity.Colum;
import com.entity.Course;
import com.entity.StudentScore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.utils.PageNameUtil.GRADEREVIEW;

@Controller
@RequestMapping("/teacher")
public class GradeReview {

    @Autowired
    private CourseDao courseDao;

    @Autowired
    private StudentScoreDao studentScoreDao;

    @RequestMapping("/gradeReview")
    public String gradeReview(){

        return GRADEREVIEW;

    }

    @RequestMapping("/initialization")
    @ResponseBody
    public Object  initialization(){

        SimpleDateFormat df = new SimpleDateFormat("yyyy");//设置日期格式
        String date = df.format(new Date());
        Course selcourse = new Course(null,null,null,date);
        List<Course> courses = courseDao.getCourse(selcourse);
        return courses;

    }

    @RequestMapping("/change")
    @ResponseBody
    public Object  change(@RequestParam(value = "year", required = false) String year){

        Course selcourse = new Course(null,null,null,year);
        List<Course> courses = courseDao.getCourse(selcourse);
        return courses;

    }

    @RequestMapping("/check")
    @ResponseBody
    public Object  check(@RequestParam(value = "year", required = false) String year,
                         @RequestParam(value = "id", required = false) String id,
                         @RequestParam(value = "name", required = false) String name,
                         @RequestParam(value = "number", required = false) String number,
                         HttpServletRequest request, ModelMap model){

        List<String> colum = studentScoreDao.getColumName(id);
        System.out.println(colum);

        List<Object> result = new ArrayList<>();

        Colum now = new Colum("考核形式","分配分数","指标点");

        result.add(now);

        for (String item:colum
             ) {
            now.setForm(item);
            List<Double> score = studentScoreDao.getScore(id,item);
            double count = 0;
            String string1 = "";
            for (Double item2:score
                 ) {
                String pointid = studentScoreDao.getPointid(id,item,item2).toString();
                string1 = string1 + studentScoreDao.getPoint(pointid).toString()+ " ";
                count = count + item2;
            }
            now.setScore(String.valueOf(count));
            now.setPoint(string1);
            result.add(now);
        }
        System.out.println(result);


        return colum;

    }
}
