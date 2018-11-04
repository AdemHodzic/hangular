import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/commons';
import { ApiService, UserService } from '@app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  user: User;

  failedRegister = false;
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.user = new User(this.username, this.password);
    this.apiService.registerUser(this.user)
      .subscribe(
        data => {
          this.userService.setUser(data)
        },
        err => console.error(err));
  }
  get username() {
    return this.form.get('username').value;
  }

  get password() {
    return this.form.get('password').value;
  }
}
