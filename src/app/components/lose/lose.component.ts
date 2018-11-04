import { Component, OnInit } from '@angular/core';
import { User } from '@app/commons';
import { GameService, ApiService, UserService } from '@app/services';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  score: number;
  user: User;
  constructor(
    private userService: UserService,
    private gameService: GameService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.score = this.gameService.getScore();
    this.user = this.userService.getUser();
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
