import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS } from '../commons/mock-users';
import { User } from 'src/app/commons/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;
  user: User;
  score: number;

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

  setScore(score: number): void {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }


  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  validate(user: User): boolean {

    for (const element of this.users) {
      if (element.name === user.name) {
        this.setUser(user);
        return true;
      }
    }

    return false;
  }
}
