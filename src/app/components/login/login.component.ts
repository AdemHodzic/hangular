import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '@app/commons';
import { UserService, ApiService } from '@app/services';
import { Router } from '@angular/router';
import { AsyncUserValidator } from '@app/commons';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError, of, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loadingError$ = new Subject<any>();
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl()
  });

  user: User;
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  login() {

    const login = new User(this.username.value, this.password.value);
    this.apiService.loginUser(login)
      .pipe(
        tap(data => {
          if (data === null) {
            throw new Error('Wrong username and/or password!');
          }
        })
      )
      .subscribe(
        data => {
          this.userService.setUser(data);
          this.loadingError$.next(null);
        },
        err => { this.loadingError$.next(err) });
    }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
