import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:any;
  employee:Employee=new Employee();
  submitted=false;
  constructor(private es:EmployeeService,private route:ActivatedRoute,private router:Router)
   {

  }

  ngOnInit():void
   {
     this.id=this.route.snapshot.params['id'];
     this.es.getEmployeeById(this.id).subscribe(data=>{
       this.employee=data;
     },error=>console.log(error));
   }
   onSubmit()
   {
       this.es.updateEmployee(this.id,this.employee).subscribe(data=>{
       this.goToEmployeeList();
       },
       error=>console.log(error)
       );
   }
   goToEmployeeList()
    {
       this.router.navigate(['/employees']);
     }
     myForm=new FormGroup(
      {
        id:new FormControl(),
        firstname:new FormControl(),
        lastname:new FormControl()
      }
     );
     get EmployeeId()
     {
       return this.myForm.get('id');
     }
     get EmployeeLastName()
     {
       return this.myForm.get('lastname');
     }
     get EmployeeEmail()
     {
       return this.myForm.get('email');
     }
     get EmployeeFirstName()
     {
       return this.myForm.get('firstname');
     }
     updateEmp(updateEmp:any)
     {
       console.log('clicked');
       this.submitted=false;
       this.employee=new Employee();
       this.employee.id=this.EmployeeId?.value;
       this.employee.firstname=this.EmployeeFirstName?.value;
       this.employee.lastname=this.EmployeeLastName?.value;
       this.employee.email=this.EmployeeEmail?.value;
       this.employee.active=true;

       console.log(this.employee.firstname);
       console.log(this.employee.lastname);
       console.log(this.employee.email);
       console.log(this.employee.active);

       this.onSubmit();

     }

  }
