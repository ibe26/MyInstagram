import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginDTO, IUserDTO, IUserToken } from '../Interfaces/IUser';
import { UserAPI } from './APICommands';

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(private httpClient: HttpClient) { }

  public GetUser(UserID:any=""):Observable<IUserDTO>{
    return this.httpClient.get<IUserDTO>(UserAPI.Get(UserID));
  }
  public Authorize(User:ILoginDTO):Observable<IUserToken>{
    return this.httpClient.post<IUserToken>(UserAPI.GetToken(),User);
  }
}
