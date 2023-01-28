import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginDTO, IUserDTO, IUserToken,IRegisterDTO } from '../Interfaces/IUser';
import { APICommands, UserAPI } from './APICommands';

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(private httpClient: HttpClient) { }

  public GetUser(UserID:any=""):Observable<IUserDTO>{
    return this.httpClient.get<IUserDTO>(UserAPI.Get(UserID));
  }
  public Authorize(User:ILoginDTO):void{
    this.httpClient.post<IUserToken>(UserAPI.GetToken(),User).subscribe((data:IUserToken)=>{
      localStorage.setItem('UserLoggedIn',JSON.stringify(data));
    });
  }

  public Register(User:IRegisterDTO):void{
    this.httpClient.post(UserAPI.Register(),User);
  }
  public Logout(UserID:number):void{
    this.httpClient.delete(UserAPI.Logout(UserID))
  }
}


