import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './Components/Post/Post.component';
import { PostListComponent } from './Components/PostList/PostList.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
