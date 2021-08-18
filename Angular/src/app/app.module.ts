import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    EditComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }