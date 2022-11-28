import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Interfaces/user-login';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : UserLogin ={email:"",password:""};
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user);
  }

}
