package com.demo.manytomanyexample.service.implementation;

import com.demo.manytomanyexample.entity.Student;
import com.demo.manytomanyexample.repository.StudentRepository;
import com.demo.manytomanyexample.service.iStudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements iStudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
