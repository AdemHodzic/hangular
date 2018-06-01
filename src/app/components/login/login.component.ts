import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../commons/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AsyncUserValidator } from '../../commons/AsyncUserValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  failedLogin = false;
  arr = [];
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl()
  });

  user: User;
  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit() {
    setTimeout(() => {

    console.log(this.userService.users);
    }, 2000);
  }

  login() {

    this.user = new User(this.username.value, this.password.value);
    if (this.userService.validate(this.user)) {
      this.router.navigate(['/menu']);
    } else {
      this.failedLogin = true;
    }
  }

  getItems() {
    let temp = [];
    for (const items of this.arr) {
      for (const item of items) {
        temp.push(item.name);
      }
    }

    return temp;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
