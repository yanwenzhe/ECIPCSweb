package com.dao;

import com.entity.Student;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDao {

    /**
     * 添加
     * @param student
     */
    public void addStudent(Student student);
}
