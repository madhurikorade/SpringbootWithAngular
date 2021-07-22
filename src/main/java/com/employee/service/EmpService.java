package com.employee.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.*;
import com.employee.repository.EmployeeRepository;
 
@Service
public class EmpService {
	
	@Autowired
	EmployeeRepository EmployeeRepository;
	

	public List<Employee> getAllEmployees()
	{
		return EmployeeRepository.findAll();
	}
	
	public Employee SaveEmployee(Employee emp)
	{
		return EmployeeRepository.save(emp);
	}
	
	public Employee getEmployeeById(int id)
	{
		//return EmployeeRepository.findById(id).get();
		 Optional<Employee> employee = EmployeeRepository.findById(id);
		 return employee.isEmpty() ? null : employee.get();
	}
	
	public Employee updateEmployee(Integer id,Employee emp)
	{
		Optional<Employee> u = EmployeeRepository.findById(id);
		if(u.isEmpty())
		{
			return null;
		}
		else
		{
			  Employee existingemp = EmployeeRepository.findById(id).get();
			  existingemp.setFirstname(emp.getFirstname());
			  existingemp.setLastname(emp.getLastname());
			  existingemp.setEmail(emp.getEmail());
			  return EmployeeRepository.save(existingemp);
		}
	}
	

	 public String deleteEmployee(Integer id) {
		 
			 EmployeeRepository.deleteById(id);
			 return "Employee removed ||"+id;		
		 }
	


}

