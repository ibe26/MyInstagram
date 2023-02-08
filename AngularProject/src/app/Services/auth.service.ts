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

  // public Authorize(User:ILoginDTO):void{
  //   this.httpClient.post<{token:string}>(UserAPI.GetToken(),User).subscribe((data:{token:string})=>{
  //     localStorage.setItem('Token',JSON.stringify(data));
  //   });
  // }

  public IsAuthorized():boolean{
    let result:boolean=false;
    if(localStorage.getItem('Token')){
      result=true;
    }
    return result;
  }

  public Logout(UserID:number):void{
    this.httpClient.delete(UserAPI.Logout(UserID))
  }

  public get TokenLS():string|null{
    const Token:{token:string}|null=(JSON.parse(localStorage.getItem('Token')!) as {token:string});
    if(Token!==null)
    {
      return Token.token;
    }
    return null;
  }

}


