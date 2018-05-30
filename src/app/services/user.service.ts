import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS } from '../commons/mock-users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;

  constructor() { }

  getAllUsers() {
    return Observable.create(this.users);
  }
}
