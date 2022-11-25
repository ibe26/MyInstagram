import { IComment } from "./IComment"

export interface IPost{
  id:number,
  owner:string,
  title:string,
  text:string,
  likeCount:number,
  comments:IComment[],
  image:string,
  date:number,
  whoLiked:any
}
