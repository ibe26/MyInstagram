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
  public static Get(attribute: any) {
    return APICommands.Url(attribute);
  }

}

export class PostAPI extends APICommands {
  constructor() {
    super();

  }

  public static override Get(userID:number):string {

    return APICommands.Url("post" + `/${userID}`);
  }

  public static likePost(PostID: number, UserID: number): string {
    // /api/like?PostID=5&UserID=2
    return APICommands.Url("post") + `/like?PostID=${PostID}&UserID=${UserID}`;
  }
  public static unLikePost(PostID: number, UserID: number): string {
    // /api/unlike?PostID=5&UserID=2
    return APICommands.Url("post") + `/unlike?PostID=${PostID}&UserID=${UserID}`;
  }



}

export class UserAPI extends APICommands{
  constructor(){
    super();
  }

  public static override Get(UserID:number):string{
    return APICommands.Url("user"+`/${UserID}`);
  }
  public static GetToken():string{
    return APICommands.Get("user/login");
  }

}
