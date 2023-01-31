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
  public GetAllPosts():Observable<Array<IPost>>
  {
    return this.http.get<Array<IPost>>(PostAPI.Get());
  }

  public likePost(user:{userID:number,postID:number})
  {
    this.http.post(PostAPI.likePost(user.postID,user.userID),user).subscribe();
  }

  public unlikePost(user:{userID:number,postID:number})
  {
    this.http.post(PostAPI.unLikePost(user.postID,user.userID),user).subscribe();
  }
}


