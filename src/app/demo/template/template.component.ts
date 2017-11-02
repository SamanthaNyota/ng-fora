import {Component, OnInit} from '@angular/core';
import {User, Comment} from "../../models/models";

@Component({
  selector: 'rc-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  title = 'Angular by Robusta Code';

  varInComponent = false;
  favorite = 'green';

  users: User[];
  comment: Comment;

  constructor() {
  }

  ngOnInit() {
    this.users = getFakeUsers();
    this.comment = getAnonymousComment();
  }

  displayCommentName() {
    if (this.comment.user) {
      return 'Anonymous';
    }

    return this.comment.user.name;
  }


}

function getFakeUsers() {
  return [
    {
      admin: true,
      id: 1,
      email: "nz@robusta.io",
      name: "Nicolas",
      statement: "Star Wars rocks"
    },
    {
      admin: true,
      id: 2,
      email: "leonard@robusta.io",
      name: "Leonard",
      statement: "Star Trek rocks"
    },
    {
      admin: false,
      id: 3,
      email: "sheldon@robusta.io",
      name: "Sheldon"
    },
    {
      admin: false,
      id: 4,
      email: "raj@robusta.io",
      name: "Rajesh"
    },
    {
      admin: false,
      id: 5,
      email: "howie@robusta.io",
      name: "Howard"
    },
    {
      admin: true,
      id: 6,
      email: "penny@robusta.io",
      name: "Penny",
      statement: "Penny ! Penny ! Penny !"
    },
    {
      admin: false,
      id: 7,
      email: "emy@robusta.io",
      name: "Emy"
    },
    {
      admin: false,
      id: 28,
      email: "bernie@robusta.io",
      name: "Bernadette"
    }
  ];
}


function getAnonymousComment() {
  return {
    id: 3,
    user:null,
    anonymous: true,
    content: "What ? You stupid !",
    tags: [
      "violence"
    ]
  }
}
