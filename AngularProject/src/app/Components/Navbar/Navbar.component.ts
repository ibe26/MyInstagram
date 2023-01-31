import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IUserDTO, IUserToken } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/Auth.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) { }
  public isAuthorized:boolean;
  public User:IUserDTO={
    userID: 0,
    email: '',
    nickname: '',
    posts: []
  };

  ngOnInit() {
    if(this.authService.TokenLS!==null)
    {
      this.authService.AllTokens().subscribe((users:Array<IUserToken>)=>{
        const foundToken:IUserToken|undefined=users.find(user=>user.token==this.authService.TokenLS);
        if(foundToken)
        {
          this.isAuthorized=true;
          this.authService.GetUser(foundToken.userID).subscribe((user:IUserDTO)=>this.User=user);
        }
        else this.isAuthorized=false;
      })
    }
  }

  public Logout(){
    console.log(this.User)
  }

}
