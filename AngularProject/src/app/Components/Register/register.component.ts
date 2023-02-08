import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IRegisterDTO, IUserDTO } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterService } from 'src/app/Services/Register.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private registerService:RegisterService,
              private userService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      nickname:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  public registerForm:FormGroup;

  private get Email(){
    return this.registerForm.value['email'];
  }
  private get Password(){
    return this.registerForm.value['password'];
  }
  private get Nickname(){
    return this.registerForm.value['nickname'];
  }

  public nicknameExists:boolean=false;

  public checkNickname(){
    this.userService.GetAllUsers().subscribe((users:Array<IUserDTO>)=>{
      if(users.some(user=>user.nickname==this.Nickname))
      {
        this.nicknameExists=true;
        return;
      }
      this.nicknameExists=false;
    })
  }
  signinSubmit(){
    if(!this.registerForm.valid)
    {
      alertify.error("Please provide all the informations needed.");
      return;
    }
    const user:IRegisterDTO={
      email:this.Email,
      nickname:this.Nickname,
      password:this.Password
    }

    this.registerService.Register(user);
    this.router.navigate(['login']);
  }
}
