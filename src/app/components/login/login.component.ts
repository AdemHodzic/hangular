import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../commons/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  failedLogin = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  user: User;
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.user = new User(this.username);
    if (this.userService.validate(this.user)) {
      this.router.navigate(['/menu']);
    } else {
      this.failedLogin = true;
    }
  }

  get username() {
    return this.form.get('username').value;
  }

  get password() {
    return this.form.get('password').value;
  }
}
