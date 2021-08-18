import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router'
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { Subscription} from 'rxjs';
import {Observable} from 'rxjs'
declare var M: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EmployeeService]
})
export class EditComponent implements OnInit {

  emp:Employee;
  id:any;
sub:Subscription;

  constructor(public employeeService:EmployeeService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.getEmplyeebyID();

  }
getEmplyeebyID(){
  this.sub=this.ar.queryParamMap.subscribe(params=>{
    this.id=params.get('id');
    this.employeeService.getEmplyeeListbyID(this.id).subscribe((list)=>{
      this.emp=list;
      this.employeeService.selectedEmployee =this.emp;
    });
  })
}
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      email: "",
      address: "",
      country: "",
      dob: "", 
    }
  }
  onSubmit(form: NgForm) {
    
    if (form.value._id == "") {
    
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
       
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
      this.router.navigate(['employee']);
    }
  }
}
