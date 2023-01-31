import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginDTO } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/Auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm:FormGroup;
  constructor(private authService:AuthService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  private get Email(){
    return this.loginForm.value['email'];
  }
  private get Password(){
    return this.loginForm.value['password'];
  }
 public loginSubmit() {
  if(!this.loginForm.valid)
  {
    alertify.error("Please enter a valid e-mail adress and password.");
    return;
  }
    const user:ILoginDTO={
      email:this.Email,
      password:this.Password
    };
    this.authService.Authorize(user);
    this.router.navigate(['home']);
  }
}
