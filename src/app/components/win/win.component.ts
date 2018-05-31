import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  score: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.score = this.userService.getScore();
  }

}
