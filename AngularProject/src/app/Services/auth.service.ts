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

  public Login(User:ILoginDTO):Observable<{nickname:string,token:string}>{
    return this.httpClient.post<{nickname:string,token:string}>(UserAPI.GetToken(),User);
  }

  public IsAuthorized():boolean{
    let result:boolean=false;
    if(localStorage.getItem('Token')){
      result=true;
    }
    return result;
  }



  public get TokenLS():{nickname:string,token:string}|null{
    const Token=JSON.parse(localStorage.getItem("Token")!) as {nickname:string,token:string};
    if(Token)
    {
      return Token;
    }
    return null;
  }

}


