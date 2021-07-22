import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseURL='http://localhost:8086/addEmployee';
   private baseURL2='http://localhost:8086/employee';
  private baseURL4='http://localhost:8086/deleteUser';
  private baseURL5="http://localhost:8086/Employees";
  private baseURL6='http://localhost:8086/update';
  
  constructor(private http:HttpClient) 
  {

  }

  getEmployeeById(id:number):Observable<Employee>
   {
      return this.http.get<Employee>(`${this.baseURL2}/${id}`);
   }

  createEmployee(employee:Employee):Observable<object>
   {
     return this.http.post(`${this.baseURL}`,employee);
   }
  deleteEmployee(id:number):Observable<object>
   {
      return this.http.delete(`${this.baseURL4}/${id}`);
   }
  getEmployeesList():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.baseURL5}`);
  }
  updateEmployee(id:any,employee:Employee):Observable<object>
  {
    return this.http.put(`${this.baseURL6}/${id}`,employee);
  }
  
}
