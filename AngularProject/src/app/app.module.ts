import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './Components/Post/Post.component';
import { PostListComponent } from './Components/PostList/PostList.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LikePipe } from './Pipes/Like.pipe';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

  const routes:Routes=[
    {path:'Home',component:PostListComponent},
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'**',redirectTo: 'Home', pathMatch: 'full'},

  ]
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    NavbarComponent,
    LikePipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
