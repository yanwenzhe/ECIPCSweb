package com.dao;

import com.entity.IndexRequirement;
import org.springframework.stereotype.Repository;

@Repository
public interface IndexRequirementDao {

    /**
     * 更新描述
     * @param indexRequirement
     */
    public void updateIndexRequirement(IndexRequirement indexRequirement);
}
