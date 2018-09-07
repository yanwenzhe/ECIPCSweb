package com.dao;

import com.entity.StudentScore;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    /**
     * 查询
     * @param studentScore
     * @return
     */
    public List<StudentScore> getStudentScore(StudentScore studentScore);


}
