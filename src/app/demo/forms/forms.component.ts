import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../services/forum.service";

@Component({
  selector: 'rc-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  loggedIn =this.forumService.loggedIn;


  data:string;

  constructor(private forumService: ForumService) {

  }

  ngOnInit() {
  }


  getAllUsers(){
    return this.forumService.getUsers();
  }

  logUser(user){
    this.forumService.loggedIn = user;
  }
  getLoggedUser(){
    return this.forumService.loggedIn;
  }

  getUsers(){
    return this.forumService.getUsers().filter(u=> ! u.admin);
  }

  getAdmins(){
    return this.forumService.getUsers().filter(u=> u.admin);
  }





}
