import { TestBed } from '@angular/core/testing';

import { LoginProxyService } from './login-proxy.service';
import { LoginRequestContract } from '../../../../shared/contracts/request/login-request.contract';

describe('LoginProxyService', () => {
  let service: LoginProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginProxyService,
      ]
    });
    service = TestBed.inject(LoginProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login - deve retornar mensagem de sucesso após o login', () => {
    const loginRequestContract: LoginRequestContract = {
      email: 'admin@email.com',
      password: 'admin123',
    };
    service.login(loginRequestContract).subscribe(
      loginResponse => {
        expect(loginResponse.message).toBe('Login efetuado com sucesso!')
      }
    );
  });
});
