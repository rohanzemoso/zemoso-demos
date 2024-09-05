package com.demo.manytomanyexample.repository;

import com.demo.manytomanyexample.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
