import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  score: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.score = this.userService.getScore();
  }


}
