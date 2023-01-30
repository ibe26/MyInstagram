import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginDTO } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm:FormGroup;
  constructor(private authService:AuthService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
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
    const user:ILoginDTO={
      email:this.Email,
      password:this.Password
    };
    this.authService.Authorize(user);
    }
}
