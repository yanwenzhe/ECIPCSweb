package com.dao;

import com.entity.StudentScore;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentScoreDao {

    /**
     * 添加
     * @param studentScore
     */
    public void addStudentScore(StudentScore studentScore);

    /**
     * 修改score,fullScore
     * @param studentScore
     */
    public void updateStudentScore(StudentScore studentScore);
}
