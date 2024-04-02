import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-emploee',
  templateUrl: './emploee.component.html',
  styleUrls: ['./emploee.component.css']
})
export class EmploeeComponent implements OnInit {
constructor(private employeeService:EmployeeService){

}
  ngOnInit(): void {
  this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployees().subscribe(
      data=>console.log(data)
    )
  }
}
