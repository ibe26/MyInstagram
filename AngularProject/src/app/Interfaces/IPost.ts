import { IComment } from "./IComment"

export interface IPost{
  id:number,
  Owner:string,
  Title:string,
  Text:string,
  likeCount:number,
  comments:IComment[],
  Image:string,
  Date:number
}
