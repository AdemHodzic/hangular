import { Injectable } from '@angular/core';
import { USERS } from '../commons/mock-users';
import { User } from 'src/app/commons/user';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;
  user: User;
  score: number;
  databaseUsers = [];
  api = 'https://randomuser.me/api/?results=500';

  constructor(private http: HttpClient) {
    this.initialiyeUsers();
  }

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
      if (element.name === user.name && element.password === user.password) {
        this.setUser(user);
        return true;
      }
    }

    return false;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getFromHttp() {
    return this.http.get(this.api)
    .pipe(
      map(data => data.results)
    );
  }

  private initialiyeUsers() {
    this.getFromHttp()
    .subscribe(data => {
      data.forEach(element => {
        const name = element.login.username;
        const pass = element.login.password;
        const user = new User(name, pass);
        this.users.push(user);
      });
    });
  }

}
