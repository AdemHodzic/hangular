import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  word: string[];
  letters: string[] = [];
  usedLetters: string[] = [];

  constructor(private wordsSerice: WordsService) { }

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
    }
    this.usedLetters.push(letter);
  }

  private updateLetters(letter) {
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        this.letters[i] = letter;
      }
    }
  }
}
