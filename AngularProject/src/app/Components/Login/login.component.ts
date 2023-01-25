import { Component, OnInit } from '@angular/core';
import { ILoginDTO } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    const user:ILoginDTO={
      email: 'ilkerberke13@gmail.com',
      password: 'testpass'
    };
    this.authService.Authorize(user);
  }
}
