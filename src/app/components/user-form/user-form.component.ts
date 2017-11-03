import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  @Output() eventEmitter: EventEmitter<User> = new EventEmitter;
 // @Input() users: User[]

  constructor(public usersService: UsersService) {
  }

  ngOnInit() {

    this.user = {
      name: "Eliana",
      id: 44,
      email: "elisa.golgo.com",
      admin: false
    }
  }

  createUser() {

    this.usersService.createUser({...this.user})
      .subscribe(() => this.eventEmitter.emit({...this.user}));
  }

  getUsers(){
    return this.usersService.users;
  }

}
