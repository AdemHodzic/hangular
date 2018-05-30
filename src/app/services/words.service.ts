import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORDS } from '../commons/mock-words';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words = WORDS;
  constructor() { }

  getAllWords() {
    return this.words;
  }

  getRandomWord() {
    const maximum = this.words.length;
    const index = Math.floor(Math.random() * maximum);
    return this.words[index];
  }
}
