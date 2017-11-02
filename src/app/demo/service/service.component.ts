import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../services/forum.service";
import {FakeLoginService, LoginServiceImpl} from "../../services/user.service";

@Component({
  selector: 'rc-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],

  providers:[{provide:LoginServiceImpl,  useClass: FakeLoginService}]
})
export class ServiceComponent implements OnInit {

  constructor(private service:ForumService,
              private loginService:LoginServiceImpl) { }

  ngOnInit() {
  }

}
