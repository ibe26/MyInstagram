import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterDTO } from '../Interfaces/IUser';
import { UserAPI } from './APICommands';

@Injectable({providedIn: 'root'})
export class RegisterService {
  constructor(private httpClient: HttpClient) { }

  public Register(User:IRegisterDTO):void{

    try {
      this.httpClient.post(UserAPI.Register(),User).subscribe();
    } catch (error) {
      console.log(error)
    }
  }
}
