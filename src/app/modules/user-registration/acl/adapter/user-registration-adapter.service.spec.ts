import { TestBed } from '@angular/core/testing';

import { UserRegistrationAdapterService } from './user-registration-adapter.service';

describe('UserRegistrationAdapterService', () => {
  let service: UserRegistrationAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRegistrationAdapterService,
      ]
    });
    service = TestBed.inject(UserRegistrationAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
