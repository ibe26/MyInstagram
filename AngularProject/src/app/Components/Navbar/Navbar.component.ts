import { ApplicationRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IUserDTO, IUserToken } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,private appRef: ApplicationRef) { }
  public User:string;

  ngOnInit() {
    if(this.authService.TokenLS!==null)
    {
      this.User=this.authService.TokenLS.nickname;
    }
  }

  public LoggedIn(){
    if(this.authService.TokenLS)
    {
      return true;
    }
    return false;
  }

  public Logout():void{
    localStorage.removeItem("Token");
   }

}
