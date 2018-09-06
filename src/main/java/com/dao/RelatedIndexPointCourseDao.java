package com.dao;

import com.entity.RelatedIndexPointCourse;
import org.springframework.stereotype.Repository;

@Repository
public interface RelatedIndexPointCourseDao {

    /**
     * 添加
     * @param relatedIndexPointCourse
     */
    public void addRelatedIndexPointCourse(RelatedIndexPointCourse relatedIndexPointCourse);

    /**
     *修改supportFactor,supportDegree,evaluateValue,techingContent,assessmentContent
     * @param relatedIndexPointCourse
     */
    public void updateRelatedIndexPointCourse(RelatedIndexPointCourse relatedIndexPointCourse);
}
