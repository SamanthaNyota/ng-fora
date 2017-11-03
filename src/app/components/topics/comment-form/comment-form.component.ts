import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicsService} from "../../../services/topics.service";
import {Topic, Comment} from "../../../models/models";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'rc-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  comment: Comment;
 @Input() topic: Topic;

  @Output() addComment: EventEmitter<Comment> = new EventEmitter;

  constructor(public topicsService: TopicsService, usersService: UsersService) {}

  ngOnInit() {
    this.comment = {
      id: 14,
      content:" chocolat chaud",
      user:{
        id: 6,
          email: "tired@gotosleep.com",
          name: "Peony",
      }
    };
  }

  createComment(){
    this.topicsService.createComment(this.comment, this.topic).subscribe(comment => this.addComment.emit({... this.comment}))
  }

}
