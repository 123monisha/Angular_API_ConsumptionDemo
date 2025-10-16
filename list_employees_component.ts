import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Employee } from '../Employee';

@Component({
  selector: 'employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  employees:Employee[]=[];
  constructor(client:HttpClient)
  {
    client.get("https://localhost:7127/api/Employee/ListEmployees").subscribe(data=>{this.employees=JSON.parse(JSON.stringify(data));
      console.log(this.employees);
    })

  }

}
