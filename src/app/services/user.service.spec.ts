import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  fit('should be created', inject([UserService], (service: UserService) => {
    const user = service.getUserByUsername('Admin');
    expect(user).toBeTruthy();
  }));
});
