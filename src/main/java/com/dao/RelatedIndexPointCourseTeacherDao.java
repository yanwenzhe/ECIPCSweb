package com.dao;

import com.entity.RelatedIndexPointCourseTeacher;
import org.springframework.stereotype.Repository;

@Repository
public interface RelatedIndexPointCourseTeacherDao {

    /**
     * 添加
     * @param relatedIndexPointCourseTeacher
     */
    public void addRelatedIndexPointCourseTeacher(RelatedIndexPointCourseTeacher relatedIndexPointCourseTeacher);

    /**
     * 修改hasChosen
     * @param relatedIndexPointCourseTeacher
     */
    public void updateRelatedIndexPointCourseTeacher(RelatedIndexPointCourseTeacher relatedIndexPointCourseTeacher);
}
