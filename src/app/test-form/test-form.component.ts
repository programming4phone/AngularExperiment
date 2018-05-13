import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  employee: Employee;
  msg: string;

  constructor() { }

  ngOnInit() {
    this.newEmployee();
  }

  onSubmit() {
    this.msg = 'Form submitted';
  }

  newEmployee() {
    this.employee = new Employee();
    this.msg = 'Enter form data';
  }

  get diagnostic() {
    return JSON.stringify(this.employee);
  }

}
