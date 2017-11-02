import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../services/forum.service";

@Component({
  selector: 'rc-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor(private service:ForumService) { }

  ngOnInit() {
  }

}
