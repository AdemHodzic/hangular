import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  word: string[];
  letters: string[] = [];
  usedLetters: string[] = [];
  tries = 5;
  score = 0;

  constructor(
    private wordsSerice: WordsService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.word = this.wordsSerice.getRandomWord().split('');
    for (let i = 0; i < this.word.length; i++) {
      this.letters.push('_');
    }
  }

  handle(e, el) {
    const letter = e.key;
    el.value = null;
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
      this.userService.setScore(this.score);
      this.router.navigate(['/lose']);
    }

    if (this.letters.indexOf('_') === -1) {
      this.userService.setScore(this.score);
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
