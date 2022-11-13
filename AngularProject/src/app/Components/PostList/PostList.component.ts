import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Interfaces/IPost';

@Component({
  selector: 'app-PostList',
  templateUrl: './PostList.component.html',
  styleUrls: ['./PostList.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public PostList: Array<IPost> = [{
    id: 0,
    Owner: 'boll4321',
    likeCount: 10328,
    comments: [],
    Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    Date: Date.now(),
    Title: 'Title',
    Text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 1,
    Owner: 'boll4321',
    likeCount: 10328,
    comments: [],

    Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    Date: Date.now(),
    Title: 'Title',
    Text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }]
}
