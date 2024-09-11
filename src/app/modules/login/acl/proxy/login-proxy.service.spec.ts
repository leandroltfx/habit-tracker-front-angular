import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginProxyService } from './login-proxy.service';
import { LoginRequestContract } from '../../../../shared/contracts/request/login/login-request.contract';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';

describe('LoginProxyService', () => {
  let service: LoginProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LoginProxyService,
      ]
    });
    service = TestBed.inject(LoginProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login - deve devolver um objeto do tipo LoginResponseContract', () => {

    const loginRequestContract: LoginRequestContract = new LoginRequestContract();
    loginRequestContract.email = 'admin@email.com';
    loginRequestContract.password = 'admin123';

    service.login(loginRequestContract).subscribe(
      loginResponseContract => {
        expect(loginResponseContract instanceof LoginResponseContract).toBeTrue();
        expect(loginResponseContract.message).toBe('Login efetuado com sucesso!');
        expect(loginResponseContract.loggedUser.id).toBe(1);
        expect(loginResponseContract.loggedUser.username).toBe('Admin');
        expect(loginResponseContract.loggedUser.email).toBe('admin@email.com');
      }
    );
  });
});
