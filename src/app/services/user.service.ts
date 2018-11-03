import { Injectable } from '@angular/core';
import { User } from 'src/app/commons/user';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [];
  api = 'https://stormy-retreat-34074.herokuapp.com/users';

  constructor(private http: HttpClient) {
    this.initializeUsers();
  }

  getAllUsers(): User[] {
    return this.users;
  }

  setUser(user) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user; 
  }

  getFromHttp() {
    return this.http.get(this.api)
    .pipe(
      map(data=>JSON.parse(JSON.stringify(data))),
    );
  }

  private initializeUsers() {
    this.getFromHttp()
    .subscribe(data => {
      data.forEach(element => {
        const user = new User(element.username);
        user.highscore = element.highscore;
        user.tries = element.tries;
        this.users.push(user);
      });
    });
  }

}
