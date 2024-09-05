package com.demo.manytomanyexample.service;

import com.demo.manytomanyexample.entity.Course;
import java.util.List;

public interface iCourseService {

    Course createCourse(Course course);

    List<Course> getAllCourses();
}
