import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../commons/user';

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
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.user = new User(this.username);

    if (!this.userService.validate(this.user)) {
      this.router.navigate(['/menu']);
    } else {
      this.failedRegister = true;
    }

  }
  get username() {
    return this.form.get('username').value;
  }

  get password() {
    return this.form.get('password').value;
  }
}
