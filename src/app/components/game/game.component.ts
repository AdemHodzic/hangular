import { Component, OnInit, HostListener } from '@angular/core';
import { GameService, UserService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
      this.handle(event);
  }

  word: string[];
  letters: string[] = [];
  usedLetters: string[] = [];
  tries = 5;
  score = 0;

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    this.word = this.gameService.getRandomWord().split('');
    for (let i = 0; i < this.word.length; i++) {
      this.letters.push('_');
    }

  }

  handle(e) {
    const letter = e.key;
    console.log(this.word);
    if (this.usedLetters.indexOf(letter) !== -1) {
      return;
    }

    if (this.word.indexOf(letter) !== -1) {
      this.updateLetters(letter);
    } else {
      this.tries--;
    }

    if (this.tries < 1) {
      this.gameService.setScore(this.score);
      this.router.navigate(['/lose']);
    }

    if (this.letters.indexOf('_') === -1) {
      this.gameService.setScore(this.score);
      this.router.navigate(['/win']);
    }
    this.usedLetters.push(letter);
  }

  private updateLetters(letter) {
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        this.letters[i] = letter;
        this.score += 10;
      }
    }
  }
}
