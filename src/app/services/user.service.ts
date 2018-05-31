import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS } from '../commons/mock-users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;
  score: number;

  constructor() { }

  getAllUsers() {
    return this.users;
  }

  setScore(score: number) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }
}
