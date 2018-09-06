package com.dao;

import com.entity.Course;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDao {
    /**
     * 添加课程
     * @param course
     */
    public void addCourse(Course course);


    /**
     * 更新课程,年份不能更改
     * @param course
     */
    public void updateCourse(Course course);


}
