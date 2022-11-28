import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Intefaces/role';
import { User } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   user : User = {lastName:"", firstName:"", email:"", password:"", roles:[]};
   nameRegex: RegExp = /^[A-Z a-z]+$/;
   roles : Role[] = [];

  constructor(private authSerice : AuthService, private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe((roles)=>{
      this.roles = roles;
    });
  }

  onRegister(){
    this.authSerice.register(this.user).subscribe((res)=>{
      alert(res);
    })
  }

}
