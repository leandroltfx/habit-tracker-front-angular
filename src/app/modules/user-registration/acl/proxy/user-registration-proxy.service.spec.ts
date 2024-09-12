import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserRegistrationProxyService } from './user-registration-proxy.service';

describe('UserRegistrationProxyService', () => {
  let service: UserRegistrationProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UserRegistrationProxyService,
      ]
    });
    service = TestBed.inject(UserRegistrationProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
