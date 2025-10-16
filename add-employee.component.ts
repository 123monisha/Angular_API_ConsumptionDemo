import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { Department } from '../Department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  emp:Employee=new Employee();//
  msg:string="";
  depts:Department[]=[];
  constructor(private client:HttpClient)
  {
   client.get("https://localhost:7127/api/Employee/ListDepartments").subscribe(data=>
   {
 this.depts=JSON.parse(JSON.stringify(data));
   }
   );

  }
addEmployee(frm:any)
{
  this.client.post("https://localhost:7127/api/Employee/AddEmployee",frm).subscribe(data=>{this.msg="Registration successfull";
    console.log(frm);
  })

}
}
