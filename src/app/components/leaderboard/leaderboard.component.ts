import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/commons/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  users: User[];
  number = 1;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    this.users.sort(this.compare);
  }

  private compare(a: User, b: User) {
    if (a.highscore < b.highscore) {
      return 1;
    }
    if (a.highscore > b.highscore) {
      return -1;
    }
    return 0;
  }
}
