import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
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
}
