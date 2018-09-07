package com.dao;

import com.entity.IndexRequirement;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public interface IndexRequirementDao {


    /**
     * 查看所有指标点
     */
    public List<IndexRequirement> getAllRequirements();


    /**
     * 更新描述
     * @param indexRequirement
     */
    public void updateIndexRequirement(IndexRequirement indexRequirement);
}
