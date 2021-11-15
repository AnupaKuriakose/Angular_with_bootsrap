import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeedataService {
  constructor() {}
  employees: Employee[] = [
    {
      id: 1,
      name: 'Ashish',
      email: 'ashish@gmail.com',
      address: '',
    },
    {
      id: 2,
      name: 'Manisayt',
      email: 'mani@gmail.com',
      address: '',
    },
    {
      id: 3,
      name: 'Riush',
      email: 'Ruy@gmail.com',
      address: '',
    },
  ];
  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
