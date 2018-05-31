import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/commons/user';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  score: number;
  user: User;
  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.score = this.userService.getScore();
    this.user = this.userService.getUser();
    this.updateScore();
  }

  private updateScore() {

    if (this.user.highscore < this.score) {
      this.user.highscore = this.score;
    }

  }

}
