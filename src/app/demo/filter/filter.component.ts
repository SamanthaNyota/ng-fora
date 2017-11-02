import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../services/forum.service";

@Component({
  selector: 'rc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterValue:string = '';

  constructor(public forumService: ForumService) { }

  ngOnInit() {
  }

  reducer(topics, topic){

    let filteredComments = topic.comments.filter(
      c => c.content.toLowerCase().includes(this.filterValue.toLowerCase())
    );

    return [...topics, {...topic, comments:filteredComments}];
  }

  getTopics(){
    if (! this.filterValue ){
      return this.forumService.getTopics();
    }

    return this.forumService.getTopics().reduce(this.reducer.bind(this), []);
  }



}
