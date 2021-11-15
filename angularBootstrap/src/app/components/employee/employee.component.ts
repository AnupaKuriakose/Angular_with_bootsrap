import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeedataService } from 'src/app/services/employeedata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeedataService],
})
export class EmployeeComponent implements OnInit {
  public employee!: Employee;
  public employees!: Employee[];
  constructor(private service: EmployeedataService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.service.getEmployees().subscribe((empData) => {
      this.employees = empData;
    });
  }
  selected(employee: any){  
    this.employee = employee;  
  }  
}
