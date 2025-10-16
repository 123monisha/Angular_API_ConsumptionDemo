import { Component } from '@angular/core';
import { Department } from '../Department';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent
 {
    searchId:number=0;
    empFound:Employee=new Employee();
    depts:Department[]=[];
    msg:string="";
    isUpdated:boolean=false;
    constructor(private client:HttpClient)
    {
      client.get("https://localhost:7127/api/Employee/ListDepartments").subscribe(data=>
   {
        this.depts=JSON.parse(JSON.stringify(data));
   }
   );

    }
    search()
    {
           this.client.get("https://localhost:7127/api/Employee/GetEmployees/"+this.searchId).subscribe(result=>{
            this.empFound=JSON.parse(JSON.stringify(result))
           });
    }
    editEmployee(frm:Employee)
    {
          this.client.put("https://localhost:7127/api/Employee/UpdateEmployee/",frm).subscribe(result=>{
            this.msg="Employee details have been modified";
            this.isUpdated=true;
           
           });
    }
}
