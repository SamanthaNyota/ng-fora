import { AfterContentInit, Component, ViewChild,ViewContainerRef } from '@angular/core';
import {DynamicService} from "../../services/dynamic.service";
import {ForumService} from "../../services/forum.service";

@Component({
  selector: 'rc-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterContentInit{

  @ViewChild('injectComponent', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  constructor(
    private dynamicService: DynamicService,
    private forumService : ForumService) {
  }

  ngAfterContentInit() {
    let componentRef =this.viewContainer.createComponent(this.dynamicService.getComponentFactory());
    componentRef.instance.topic = this.forumService.getStarWars();
  }

}
