import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        LoginProxyService,
        LoginAdapterService,
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
