import { IPost } from "./IPost"

export interface IUserBase {
  userID:number,
  nickname:string
}

export interface IUser extends IUserBase{
  posts:Array<IPost>
}
