package com.dao;


import com.entity.RelatedTeacherCourse;
import org.springframework.stereotype.Repository;

@Repository
public interface RelatedTeacherCourseDao {

    /**
     * 添加
     * @param relatedTeacherCourse
     */
    public void addRelatedTeacherCourse(RelatedTeacherCourse relatedTeacherCourse);

    /**
     * 修改oldProblem,oldSuggestion,result,newProblem
     * @param relatedTeacherCourse
     */
    public void updateRelatedTeacherCourse(RelatedTeacherCourse relatedTeacherCourse);
}


