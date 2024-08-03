import { TestBed } from '@angular/core/testing';

import { UserRegistrationService } from './user-registration.service';

describe('UserRegistrationService', () => {
  let service: UserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRegistrationService,
      ]
    });
    service = TestBed.inject(UserRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
