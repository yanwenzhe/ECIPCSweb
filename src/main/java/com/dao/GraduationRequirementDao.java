package com.dao;

import com.entity.GraduationRequirement;
import org.springframework.stereotype.Repository;

@Repository
public interface GraduationRequirementDao {

    /**
     * 添加毕业要求达成度
     * @param graduationRequirement
     */
    public void addGraGraduationRequirement(GraduationRequirement graduationRequirement);

    /**
     * 只能修改毕业达程度的评估值
     * @param graduationRequirement
     */
    public void updateGraduationRequirement(GraduationRequirement graduationRequirement);
}