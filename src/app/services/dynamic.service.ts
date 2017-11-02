import {Component, ComponentFactory, ComponentFactoryResolver, Injectable} from '@angular/core';
import {Topic} from "../models/models";
import {SingleTopicViewComponent} from "../components/topics/single-topic-view/single-topic-view.component";

@Injectable()
export class DynamicService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * This service could be done by a client team and injected in the
   * good module using provider at the right place
   * @returns {ComponentFactory<SingleTopicViewComponent>}
   */
  getComponentFactory():ComponentFactory<SingleTopicViewComponent>{
    return this.componentFactoryResolver.resolveComponentFactory(SingleTopicViewComponent);
  }

}
