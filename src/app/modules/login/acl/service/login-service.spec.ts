import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { LoginService } from './login-service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginRequestContract } from '../../../../shared/contracts/request/login/login-request.contract';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response.dto';

describe('LoginService', () => {
  let service: LoginService;

  let loginProxyServiceSpy: jasmine.SpyObj<LoginProxyService>;

  beforeEach(() => {

    loginProxyServiceSpy = jasmine.createSpyObj<LoginProxyService>('LoginProxyService', ['login']);

    TestBed.configureTestingModule({
      providers: [
        LoginService,
        LoginAdapterService,
        { provide: LoginProxyService, useValue: loginProxyServiceSpy },
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login - deve retornar um dto da resposta do login', () => {

    const loginResponseContract: LoginResponseContract = {
      message: 'Login efetuado com sucesso!'
    };
    loginProxyServiceSpy.login.and.returnValue(of(loginResponseContract));
    const loginRequestContract: LoginRequestContract = new LoginRequestContract(
      'admin@email.com',
      'admin123',
    );

    service.login(loginRequestContract).subscribe(
      loginResponseDto => {
        expect(loginResponseDto instanceof LoginResponseDto).toBeTrue();
        expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
      }
    );
  });
});
