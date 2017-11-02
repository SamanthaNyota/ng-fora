import {Injectable} from '@angular/core';


export interface LoginService{
  getUserId():number;
}


@Injectable()
export class LoginServiceImpl implements LoginService{


  getUserId(){
    return 12;
  }

}


@Injectable()
  export class FakeLoginService extends LoginServiceImpl{

  getUserId(){
    return 55;
  }

}


