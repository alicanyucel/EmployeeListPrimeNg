import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from 'src/interfaces/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }
}
