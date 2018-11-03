import { Component, OnInit } from '@angular/core';
import { UserService, GameService, ApiService } from '@app/services';
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
    private userService: UserService,
    private gameService: GameService,
    private apiService: ApiService,
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.score = this.gameService.getScore();
    this.updateScore();
  }

  private updateScore() {
    this.user.tries++;
    if (this.user.highscore < this.score) {
      this.user.highscore = this.score;
    }
    this.apiService.updateUser(this.user)
      .subscribe(
        data => console.log(data),
        err => console.log(err));
  }

}
