import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IRegisterDTO, IUserDTO } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/Auth.service';
import { RegisterService } from 'src/app/Services/Register.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private registerService:RegisterService,
              private userService:AuthService) { }

  ngOnInit(): void {
    this.RegisterForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      nickname:['',Validators.required]
    })
  }
  public RegisterForm:FormGroup;

  private get Email(){
    return this.RegisterForm.value['email'];
  }
  private get Password(){
    return this.RegisterForm.value['password'];
  }
  private get Nickname(){
    return this.RegisterForm.value['nickname'];
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
    if(!this.RegisterForm.valid)
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
  }
}
