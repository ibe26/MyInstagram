export class APICommands {

  protected static get BaseUrl(): string {
    return `https://localhost:44380/api`;
  }
  public static Post(attribute: string): string {
    return APICommands.BaseUrl + `/${attribute}` + `/add`;
  }

  public static PostArray(attribute: string): string {
    return APICommands.BaseUrl + `/${attribute}` + `/addList`;

  }

  protected static Url(attribute: string) {
    return APICommands.BaseUrl + `/${attribute}`;
  }
  public static Get(attribute: string) {
    return APICommands.Url(attribute);
  }

}

export class PostAPI extends APICommands {
  constructor() {
    super();

  }

  public static override Get(userID: any="") {

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
