import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() user: User = {lastName:"", firstName:"", email:"", password:"", roles:[]};
  nameRegex: RegExp = /^[A-Z a-z]+$/;
  mailRegex: RegExp =/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSave(){
    this.userService.saveUser(this.user).subscribe((user)=>{
      if(user.id){
        this.userService.refreshUsers();
        alert("Utilisateur bien enregistré");
      }
    });
  }

}
