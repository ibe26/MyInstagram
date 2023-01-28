import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginDTO, IUserDTO, IUserToken } from '../Interfaces/IUser';
import { UserAPI } from './APICommands';

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(private httpClient: HttpClient) { }

  public GetUser(UserID:number):Observable<IUserDTO>{
    return this.httpClient.get<IUserDTO>(UserAPI.GetUser(UserID));
  }
  public GetAllUsers():Observable<Array<IUserDTO>>{
    return this.httpClient.get<Array<IUserDTO>>(UserAPI.Get());
  }

  public Authorize(User:ILoginDTO):void{
    this.httpClient.post<IUserToken>(UserAPI.GetToken(),User).subscribe((data:IUserToken)=>{
      localStorage.setItem('UserLoggedIn',JSON.stringify(data));
    });
  }
  public Logout(UserID:number):void{
    this.httpClient.delete(UserAPI.Logout(UserID))
  }
}


