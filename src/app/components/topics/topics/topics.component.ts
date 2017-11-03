import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../models/models";
import {TopicsService} from "../../../services/topics.service";

@Component({
  selector: 'rc-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[] = [];
  constructor(public topicsService:TopicsService) { }

  ngOnInit() {

    this.topicsService.getTopics().subscribe(topics => this.topics = topics)

  }

}

