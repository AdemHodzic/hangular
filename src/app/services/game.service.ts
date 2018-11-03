import { Injectable } from '@angular/core';
import { WORDS } from '../commons/mock-words';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  words = WORDS;
  score:number;
  constructor() { }

  getAllWords() {
    return this.words;
  }

  getRandomWord() {
    const maximum = this.words.length;
    const index = Math.floor(Math.random() * maximum);
    return this.words[index];
  }

  getScore() {
    return this.score;
  }

  setScore(score) {
    this.score = score;
  }
}
