import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  iblnIsUserPasswordCorrect: boolean;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(username: string, password: string) {

    if (this.LoginForm.valid) {
      if (username == 'admin' && password == 'admin') {
        this.router.navigate(['employee']);
      }
      else {
        this.iblnIsUserPasswordCorrect = true;
      }
    }
    else {
      let key = Object.keys(this.LoginForm.controls);
      key.filter(data => {
        let control = this.LoginForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      })
    }
  }
}
