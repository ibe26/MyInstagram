export class APICommands {

  protected static get BaseUrl(): string {
    return `https://localhost:44380/api`;
  }
  public static Post(attribute: string): string {
    return APICommands.Url + `/${attribute}` + `/add`;
  }

  public static PostArray(attribute: string): string {
    return APICommands.Url + `/${attribute}` + `/addList`;

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

  public static override  Get(userID:string) {

    const _userID:number=+userID; //Doing such thing because typescript doesn't have method overloading.
    return APICommands.Url("post"+`/${_userID}`);
  }

  public static likePost(PostID: number, UserID: number): string {
    // /api/like?PostID=5&UserID=2
    return APICommands.Url + `/like?PostID=${PostID}&UserID=${UserID}`;
  }
  public static unLikePost(PostID: number, UserID: number): string {
    // /api/unlike?PostID=5&UserID=2
    return APICommands.Url + `/unlike?PostID=${PostID}&UserID=${UserID}`;
  }



}
