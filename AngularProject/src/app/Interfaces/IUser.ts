import { IPost } from "./IPost"

export interface IUserDTO {
  userID:number,
  email:string,
  nickname:string,
  posts:Array<IPost>
}

export interface IUser extends IUserDTO{
  posts:Array<IPost>
}


export interface ILoginDTO{
  email:string,
  password:string
}

export interface IRegisterDTO extends ILoginDTO{
  nickname:string
}

export interface IUserToken{
  userID:number,
  Token:string
}
export interface IUWH{
  userID:number,
  nickname:string
}