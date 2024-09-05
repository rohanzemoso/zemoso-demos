package com.demo.manytomanyexample.service.implementation;

import com.demo.manytomanyexample.entity.Course;
import com.demo.manytomanyexample.repository.CourseRepository;
import com.demo.manytomanyexample.service.iCourseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService implements iCourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
}
