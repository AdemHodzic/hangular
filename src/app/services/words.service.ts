import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { WORDS } from '../commons/mock-words';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Word } from '../commons/word';
import { forEach } from '@angular/router/src/utils/collection';
@Injectable({
  providedIn: 'root'
})
export class WordsService implements OnInit {


  letters = 'abcdefghijklmnopqrstuvxyz';
  words: Word[] = [];
  api = 'https://api.datamuse.com/words?sp=';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  getAllWords() {
    return this.words;
  }

  getRandomWord(): Word {
    const word = 'word';
    return word as Word;
  }

  getWords(): Observable<Word> {
    return this.http.get<Word>(this.editedApi()).pipe(take(50));
  }
  private editedApi() {
    let str = '';
    const index = Math.floor(Math.random() * this.letters.length);
    const letter = this.letters.charAt(index);
    str = this.api + letter + '????';
    return str;
  }
}
