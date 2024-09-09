import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterServiceStub } from '../../tests/stubs/login-adapter.service.stub';
import { LoginProxyServiceStub } from '../../tests/stubs/login-proxy.service.stub';
import { LoginResponseDto } from '../../models/dto/login-response.dto';
import { LoggedUser } from '../../models/classes/logged-user/logged-user.model';

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

  it('login, deve retornar um objeto do tipo LoginResponseDto', () => {

    service.login('email@email.com', 'abc123').subscribe(
      loginResponseDto => {
        expect(loginResponseDto instanceof LoginResponseDto);
        expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
        expect(loginResponseDto.loggedUser instanceof LoggedUser).toBeTrue();
        expect(loginResponseDto.loggedUser.id).toBe(1);
        expect(loginResponseDto.loggedUser.username).toBe('Admin');
        expect(loginResponseDto.loggedUser.email).toBe('admin@email.com');
      }
    );
  });
});
