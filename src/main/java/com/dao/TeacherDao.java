package com.dao;

import com.entity.Teacher;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherDao {

    /**
     *添加
     * @param teacher
     */
    public void addTeacher(Teacher teacher);

    /**
     *修改username,password,phone
     * @param teacher
     */
    public void updateTeacher(Teacher teacher);
}
