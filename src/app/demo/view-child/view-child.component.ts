import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ForumService} from "../../services/forum.service";
import {Topic} from "../../models/models";
import {SingleTopicViewComponent} from "../../components/topics/single-topic-view/single-topic-view.component";

@Component({
  selector: 'rc-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  topic:Topic;

  @ViewChild(SingleTopicViewComponent) topicViewChild:SingleTopicViewComponent;

  constructor(public forumService:ForumService) { }

  ngOnInit() {
    this.topic = this.forumService.getStarWars();
  }

  ngAfterViewInit(){
    console.log('after init : ', this.topicViewChild.topic.title);


  }

  /* Or is it better ? */
  getStarWars():Topic{
    return this.forumService.getStarWars();
  }
}
