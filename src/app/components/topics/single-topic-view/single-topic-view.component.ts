import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../models/models";

@Component({
  selector: 'rc-single-topic-view',
  templateUrl: './single-topic-view.component.html',
  styleUrls: ['./single-topic-view.component.css']
})
export class SingleTopicViewComponent implements OnInit{

  @Input() topic:Topic;



  ngOnInit() {
  }

}
