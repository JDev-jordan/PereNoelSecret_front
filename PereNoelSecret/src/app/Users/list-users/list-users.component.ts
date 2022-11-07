import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data)=>{
      this.listUsers = data;
    });
  }

}
