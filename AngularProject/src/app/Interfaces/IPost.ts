import { IComment } from "./IComment"
import { IUWH } from "./IUser"

export interface IPost{
  id:number,
  nickname:string,
  title:string,
  text:string,
  likeCount:number,
  comments:IComment[],
  image:string,
  date:number,
  whoLiked:Array<IUWH>
}
