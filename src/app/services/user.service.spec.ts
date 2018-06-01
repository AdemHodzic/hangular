import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { WordsService } from './words.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

});
