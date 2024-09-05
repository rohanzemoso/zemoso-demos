package com.demo.manytomanyexample.repository;


import com.demo.manytomanyexample.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
