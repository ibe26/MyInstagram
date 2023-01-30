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
    this.httpClient.post<{token:string}>(UserAPI.GetToken(),User).subscribe((data:{token:string})=>{
      localStorage.setItem('Token',JSON.stringify(data));
    });
  }

  public IsAuthorized(UserID:number):boolean{
    let result:boolean=false;
    const token:string=(JSON.parse(localStorage.getItem('UserLoggedIn')!) as {token:string}).token
    this.httpClient.get<{token:string}>(UserAPI.GetUserToken(UserID)).subscribe((data:{token:string})=>{
      result=token==data.token;
    });
    return result;
  }
  public Logout(UserID:number):void{
    this.httpClient.delete(UserAPI.Logout(UserID))
  }
}


