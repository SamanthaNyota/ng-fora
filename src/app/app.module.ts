import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateComponent } from './demo/template/template.component';
import {ForumService} from "./services/forum.service";
import {ServiceComponent} from './demo/service/service.component';
import { PipesComponent } from './demo/pipes/pipes.component';
import {LoginServiceImpl} from "./services/user.service";
import { FilterComponent } from './demo/filter/filter.component';
import {FormsModule} from "@angular/forms";
import { ViewChildComponent } from './demo/view-child/view-child.component';
import { SingleTopicViewComponent } from './components/topics/single-topic-view/single-topic-view.component';
import { DynamicComponent } from './demo/dynamic/dynamic.component';
import {DynamicService} from "./services/dynamic.service";
import { AttributeComponent } from './demo/attribute/attribute.component';
import { FormsComponent } from './demo/forms/forms.component';
import {Http, HttpModule} from "@angular/http";
import {UsersService} from "./services/users.service";
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {TopicsService} from "./services/topics.service";
import { TopicsComponent } from './components/topics/topics/topics.component';
import { TopicViewComponent } from './components/topics/topic-view/topic-view.component';
import { CommentComponent } from './components/topics/comment/comment.component';
import { CommentFormComponent } from './components/topics/comment-form/comment-form.component';


const IS_PROD = false;



@NgModule({
  declarations: [
    AppComponent, TemplateComponent, ServiceComponent,
    PipesComponent, FilterComponent, ViewChildComponent,
    SingleTopicViewComponent, DynamicComponent,
    AttributeComponent, FormsComponent, UsersComponent, UserFormComponent, TopicsComponent, TopicViewComponent, CommentComponent, CommentFormComponent

  ],
  entryComponents:[SingleTopicViewComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [{provide:LoginServiceImpl,  useClass: LoginServiceImpl}, DynamicService, UsersService, ForumService, TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
