import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthResponse } from '../Interfaces/auth-response';
import { User } from '../Interfaces/user';
import { UserDetail } from '../Interfaces/user-detail';
import { UserLogin } from '../Interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedSubject = new Subject<boolean>();
  authenticated : boolean = false;
  token : AuthResponse = {accessToken:"", tokenType:""};
  url : string = "http://localhost:8080";

  constructor(private http : HttpClient, private router : Router) { 
    this.authenticated = sessionStorage.getItem('accessToken')?true:false;
  }

  login(user : UserLogin){
    this.http.post<AuthResponse>(this.url + "/login",user).subscribe((authResponse)=>{
      if(authResponse){
        this.token = authResponse;
        sessionStorage.setItem('accessToken' , this.token.accessToken);
        sessionStorage.setItem('tokenType' , this.token.tokenType);
        this.authenticated = true;
        this.emitAuthenticatedSubject();
        this.router.navigate(['/home']);
      }else{
        alert("Authentication failed!");
        this.authenticated = false;
        this.emitAuthenticatedSubject();
      }
    });
  }

  logout(){
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('tokenType');
    this.authenticated = false;
    this.emitAuthenticatedSubject();
    this.router.navigateByUrl("home");
  }

  isAuthenticated(){
    return this.authenticated;
  }

  register(user : User) : Observable<any>{
    return this.http.post<any>(this.url + "/register", user);
  }

  emitAuthenticatedSubject(){
    this.authenticatedSubject.next(this.authenticated);
  }
}
