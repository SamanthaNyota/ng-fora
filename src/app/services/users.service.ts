import {EventEmitter, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../models/models";

@Injectable()
export class UsersService {



  constructor(public http: Http) {}

  getUsers():Observable<User[]>{
    return this.http
      .get("http://localhost:8080/jax-rs-1/api/users")
      .map(response=>response.json());

  }

  createUser(user:User){
   return this.http.post("http://localhost:8080/jax-rs-1/api/users", user);

  }

}


