import {Component, OnInit} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ngOnInit() {
  }

  users: User[] = [];


  constructor(public usersService: UsersService) {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users
    })
  }


  getUsers(): User[] {
    return this.users;
  }

  updateList(user:User){
    this.users.push(user);
  }


}
