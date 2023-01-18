import { IComment } from "./IComment"
import { IUserBase } from "./IUser"

export interface IPost{
  id:number,
  owner:string,
  title:string,
  text:string,
  likeCount:number,
  comments:IComment[],
  image:string,
  date:number,
  whoLiked:Array<IUserBase>
}
