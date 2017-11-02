import {Component} from '@angular/core';
import {UsersService} from "./services/users.service";
import {User} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  state = 'topics';



}
