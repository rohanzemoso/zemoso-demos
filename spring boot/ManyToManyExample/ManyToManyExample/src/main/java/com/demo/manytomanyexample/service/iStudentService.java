package com.demo.manytomanyexample.service;

import com.demo.manytomanyexample.entity.Student;
import java.util.List;

public interface iStudentService {

    Student createStudent(Student student);

    List<Student> getAllStudents();
}
