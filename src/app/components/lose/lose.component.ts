import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/commons/user';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  score: number;
  user: User;
  constructor(private userService: UserService) { }

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
