package com.dao;

import com.entity.IndexPoint;
import org.springframework.stereotype.Repository;

@Repository
public interface IndexPointDao {

    /**
     * 添加指标点
     * @param indexPoint
     */
    public void addIndexPoint (IndexPoint indexPoint);

    /**
     * 修改指标点的描述
     * @param indexPoint
     */
    public void updateIndexPoint(IndexPoint indexPoint);
}
