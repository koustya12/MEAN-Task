import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { Router,ActivatedRoute } from '@angular/router'
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [EmployeeService]
})
export class DetailsComponent implements OnInit {
  emp:Employee;
  id:any;
sub:Subscription;
  constructor(public employeeService:EmployeeService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
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

  backTOList(){
    this.router.navigate(['employee']);
  }
}
