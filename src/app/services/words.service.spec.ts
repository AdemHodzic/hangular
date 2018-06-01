import { TestBed, inject } from '@angular/core/testing';

import { WordsService } from './words.service';
import { HttpClient } from '@angular/common/http';

describe('WordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsService, HttpClient]
    });
  });
});
