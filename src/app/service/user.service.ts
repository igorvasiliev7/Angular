
import {Injectable} from '@angular/compiler/src/core';
import {Observable} from 'rxjs/index';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';

export class UserService {

  public findAll(): User[] {
    const user = new User();
    user.name = 'Alex';
    user.email = 'sfse';
    const users: User[] = [];
    users.push(user);
    return users;
  }
}

