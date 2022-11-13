import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPost } from '../Interfaces/IPost';
import { PostAPI } from './APICommands';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public GetPosts(userID:number):Observable<Array<IPost>>
  {
    const _userID=userID.toString(); //The PostAPI.Get() method accepts string parameter, will convert into number back in Get method
    return this.http.get<Array<IPost>>(PostAPI.Get(_userID));
  }

}


