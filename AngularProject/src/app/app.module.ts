import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './Components/Post/Post.component';
import { PostListComponent } from './Components/PostList/PostList.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LikePipe } from './Pipes/Like.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    NavbarComponent,
    LikePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
