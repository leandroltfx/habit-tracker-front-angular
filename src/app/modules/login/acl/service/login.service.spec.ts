import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterServiceStub } from '../../stubs/login-adapter.service.stub';
import { LoginProxyServiceStub } from '../../stubs/login-proxy.service.stub';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: LoginAdapterService, useClass: LoginAdapterServiceStub },
        { provide: LoginProxyService, useClass: LoginProxyServiceStub },
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
