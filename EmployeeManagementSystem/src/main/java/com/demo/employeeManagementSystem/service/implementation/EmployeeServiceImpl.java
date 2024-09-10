package com.demo.employeeManagementSystem.service.implementation;

import com.demo.employeeManagementSystem.model.Department;
import com.demo.employeeManagementSystem.model.Employee;
import com.demo.employeeManagementSystem.repository.DepartmentRepository;
import com.demo.employeeManagementSystem.repository.EmployeeRepository;
import com.demo.employeeManagementSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Employee createEmployee(Employee employee) {
        Department department1 = departmentRepository.findById(employee.getDepartment().getId())
                .orElseThrow(()-> new RuntimeException("Error in creating"));
        employee.setDepartment(department1);
        return employeeRepository.save(employee);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        employee.setId(id);
        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
