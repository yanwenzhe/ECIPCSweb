package com.dao;

import com.entity.RelatedIndexPointCourse;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    /**
     * 查询
     * @param relatedIndexPointCourse
     * @return
     */
    public List<RelatedIndexPointCourse> getRelatedIndexPointCourse(RelatedIndexPointCourse relatedIndexPointCourse);
}
