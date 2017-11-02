import {Injectable} from '@angular/core';
import {Topic, Comment, Admin, User} from "../models/models";
import {Http} from "@angular/http";
import 'rxjs';
import{Observable} from 'rxjs/Observable';

@Injectable()
export class ForumService {

  private _loggedIn: User;

  api = 'http://localhost:8000/api/';

  constructor(private http: Http) {
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get(this.api + 'topics')
      .map(resp => resp.json());
  }

  addComment(topic:Topic, comment:Comment):Observable<Comment>{
    const url = this.api+'comments/topic/'+topic.id;

    return this.http.post(url, comment)
      .map(resp=>resp.json());
  }

  getStarWars(): Topic {

    return topics.find(t => t.id === 1);
  }

  getUsers(): Array<User> {
    return users;
  }


  set loggedIn(value: User) {
    this._loggedIn = value;
  }
}


var topics = [
  {
    id: 1,
    title: "Star Trek > Star Wars",
    content: "Spock is stronger than Yoda",
    user: {
      admin: true,
      id: 2,
      email: "leonard@robusta.io",
      name: "Leonard",
      statement: "Star Trek rocks"
    },
    comments: [
      {
        id: 1,
        user: {
          admin: true,
          id: 1,
          email: "nz@robusta.io",
          name: "Nicolas",
          statement: "Star Wars rocks"
        },
        content: "I'm not ok"
      },
      {
        id: 2,
        user: {
          admin: true,
          id: 2,
          email: "leonard@robusta.io",
          name: "Leonard",
          statement: "Star Trek rocks"
        },
        content: "You don't know enough about heroes"
      },
      {
        id: 3,
        anonymous: true,
        content: "What ? You stupid !",
        tags: [
          "violence"
        ]
      }
    ],
    tags: [
      "violence"
    ]
  },
  {
    id: 2,
    title: "American Football is the best game",
    content: "",
    user: {
      admin: true,
      id: 6,
      email: "penny@robusta.io",
      name: "Penny",
      statement: "Penny ! Penny ! Penny !"
    },
    comments: [
      {
        id: 4,
        user: {
          admin: true,
          id: 6,
          email: "penny@robusta.io",
          name: "Penny",
          statement: "Penny ! Penny ! Penny !"
        },
        content: "There are so many strategies",
        tags: [
          "science"
        ]
      },
      {
        id: 5,
        user: {
          admin: true,
          id: 2,
          email: "leonard@robusta.io",
          name: "Leonard",
          statement: "Star Trek rocks"
        },
        content: "What ? These guys are stupid !"
      },
      {
        id: 6,
        user: {
          admin: true,
          id: 6,
          email: "penny@robusta.io",
          name: "Penny",
          statement: "Penny ! Penny ! Penny !"
        },
        content: "They know how to count to 4",
        tags: [
          "fun",
          "science"
        ]
      },
      {
        id: 7,
        user: {
          admin: false,
          id: 3,
          email: "sheldon@robusta.io",
          name: "Sheldon"
        },
        content: "So why do they call it football and play with hands ?",
        tags: [
          "fun"
        ]
      }
    ],
    tags: [
      "fun",
      "violence"
    ]
  },
  {
    id: 3,
    title: "Ketchup",
    content: "Ketchup is not a Spice",
    user: {
      admin: false,
      id: 7,
      email: "emy@robusta.io",
      name: "Emy"
    },
    comments: [
      {
        id: 8,
        user: {
          admin: false,
          id: 7,
          email: "emy@robusta.io",
          name: "Emy"
        },
        content: "It misses spices, let's add ketchup"
      },
      {
        id: 9,
        user: {
          admin: false,
          id: 4,
          email: "raj@robusta.io",
          name: "Rajesh"
        },
        content: "What ? You stupid ! It's not a spice !"
      },
      {
        id: 10,
        user: {
          admin: false,
          id: 7,
          email: "emy@robusta.io",
          name: "Emy"
        },
        content: "But there is spicy vinegar inside"
      },
      {
        id: 11,
        user: {
          admin: false,
          id: 28,
          email: "bernie@robusta.io",
          name: "Bernadette"
        },
        content: "Vinegar is not a spice, it's a fruit",
        tags: [
          "science"
        ]
      },
      {
        id: 12,
        user: {
          admin: false,
          id: 7,
          email: "emy@robusta.io",
          name: "Emy"
        },
        content: "A liquid fruit ? Doesn't make sense !",
        tags: [
          "fun"
        ]
      },
      {
        id: 13,
        user: {
          admin: false,
          id: 3,
          email: "sheldon@robusta.io",
          name: "Sheldon"
        },
        content: "And it is a bit <strong>violent</strong> <script type='text/javascript'>alert('you are WRONG!')</script>"
      }
    ],
    tags: [
      "fun",
      "science"
    ]
  }
];

var users = [
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
