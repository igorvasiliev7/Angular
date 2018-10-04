
import {Injectable} from "@angular/compiler/src/core";
import {Observable} from "rxjs/index";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

export class UserService {

  public findAll(): User[] {
    let user = new User();
    user.name = "Alex";
    user.email = "sfse";
    let users: User[] = [];
    users.push(user)
    return users;
  }
}

