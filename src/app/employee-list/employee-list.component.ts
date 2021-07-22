import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]|undefined;
   
  constructor(private employeeService:EmployeeService,private router:Router) { 
  
  }

  ngOnInit(): void 
  {
    this.reloadData();
  }
  reloadData()
  {
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    },
    error=>alert(error.error)
    );
  }
   deleteEmployee(id:number)
   {
     this.employeeService.deleteEmployee(id).subscribe(data=>{console.log(data);
                                                       this.reloadData()},
                                                       error=>console.log(error));
   }
   updateEmployee(id:number)
   {
     this.router.navigate(['update-employee',id])
   }

  // employeeDetails(id:number)
  // {
    
  // }

}
