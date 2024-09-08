import { TestBed } from '@angular/core/testing';

import { LoginAdapterService } from './login-adapter.service';
import { LoggedUser } from '../../models/classes/logged-user/logged-user.model';
import { LoginRequestContract } from '../../models/contracts/request/login-request.contract';
import { LoginResponseContract } from '../../models/contracts/response/login-response.contract';
import { LoginResponseDto } from '../../models/dto/login-response.dto';

describe('LoginAdapterService', () => {
  let service: LoginAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginAdapterService,
      ]
    });
    service = TestBed.inject(LoginAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('toLoginRequestContract - deve devolver um objeto do tipo LoginRequestContract', () => {

    const loginRequestContract = service.toLoginRequestContract('admin@email.com', 'admin123');

    expect(loginRequestContract instanceof LoginRequestContract);
    expect(loginRequestContract.email).toBe('admin@email.com');
    expect(loginRequestContract.password).toBe('admin123');
  });

  it('toLoginResponseDto - deve transformar um LoginResponseContract em LoginResponseDto', () => {

    const loggedUser: LoggedUser = new LoggedUser();
    const loginResponseContract = new LoginResponseContract();
    loggedUser.id = 1;
    loggedUser.username = 'username';
    loggedUser.email = 'username@email.com';
    loginResponseContract.loggedUser = loggedUser;
    loginResponseContract.message = 'Login efetuado com sucesso!';

    const loginResponseDto = service.toLoginResponseDto(loginResponseContract);

    expect(loginResponseDto instanceof LoginResponseDto);
    expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
    expect(loginResponseDto.loggedUser instanceof LoggedUser).toBeTrue();
    expect(loginResponseDto.loggedUser.id).toBe(1);
    expect(loginResponseDto.loggedUser.username).toBe('username');
    expect(loginResponseDto.loggedUser.email).toBe('username@email.com');
  });
});
