import { Injectable } from '@angular/core';
import { User } from '../commons/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public api = 'https://stormy-retreat-34074.herokuapp.com/users';
  
  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {

    const newUser = {
      username: user.name,
      password: user.password
    };

    return this.http.post(this.api, newUser);
  }

  loginUser(user: User) {
    const newUser = {
      username: user.name,
      password: user.password
    }
    return this.http.post(this.api + '/login', newUser);
  }

  updateUser(user) {
    return this.http.patch(this.api + user.id, user);
  }
}
