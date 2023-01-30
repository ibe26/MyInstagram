import { IUserDTO, IUserToken } from "../Interfaces/IUser";

export class APICommands {

  private static get BaseUrl(): string {
    return `https://localhost:44380/api`;
  }
  public static Post(attribute: string): string {
    return APICommands.BaseUrl + `/${attribute}` + `/add`;
  }

  public static PostArray(attribute: any): string {
    return APICommands.BaseUrl + `/${attribute}` + `/addList`;

  }

  protected static Url(attribute: any) {
    return APICommands.BaseUrl + `/${attribute}`;
  }


}

export class PostAPI extends APICommands {
  constructor() {
    super();

  }

  public static Get():string {
    return APICommands.Url("post");
  }
  public static GetUser(UserID:number):string {
    return this.Get()+`/${UserID}`;
  }

  public static likePost(PostID: number, UserID: number): string {
    // /api/like?PostID=5&UserID=2
    return this.Get() + `/like?PostID=${PostID}&UserID=${UserID}`;
  }
  public static unLikePost(PostID: number, UserID: number): string {
    // /api/unlike?PostID=5&UserID=2
    return this.Get() + `/unlike?PostID=${PostID}&UserID=${UserID}`;
  }



}

export class UserAPI extends APICommands{
  constructor(){
    super();
  }

  public static Get():string{
    return APICommands.Url("user");
  }
 public static GetUser(UserID:number):string{
    return this.Get()+`/${UserID}`;
  }
  public static Register():string{
    return this.Get()+"/register";
  }
  public static GetToken():string{
    return this.Get()+"/login";
  }
  public static Logout(UserID:number):string{
    return this.Get()+`/logout/${UserID}`;
  }
  public static GetUserToken(UserID:number):string{
    return this.Get()+`/token/${UserID}`;
  }
}
