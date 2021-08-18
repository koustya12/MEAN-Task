import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'employee',component: EmployeeComponent},
  {path:'edit',component:EditComponent},
  {path: 'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
