import { TestBed } from '@angular/core/testing';

import { UserRegistrationAdapterService } from './user-registration-adapter.service';
import { RegisterUserRequestContract } from '../../../../shared/contracts/request/register-user/register-user-request.contract';
import { LoggedUser } from 'src/app/shared/models/logged-user/logged-user.model';
import { RegisterUserResponseContract } from 'src/app/shared/contracts/response/register-user/register-user-response.contract';
import { RegisterUserResponseDto } from 'src/app/shared/dto/register-user/register-user-response.dto';

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

  it('toRegisterUserRequestContract - deve devolver um objeto do tipo RegisterUserRequestContract', () => {

    const registerUserRequestContract = service.toRegisterUserRequestContract('admin', 'admin@email.com', 'admin123');

    expect(registerUserRequestContract instanceof RegisterUserRequestContract);
    expect(registerUserRequestContract.username).toBe('admin');
    expect(registerUserRequestContract.email).toBe('admin@email.com');
    expect(registerUserRequestContract.password).toBe('admin123');
  });

  it('toRegisterUserResponseDto - deve transformar um RegisterUserResponseContract em RegisterUserResponseDto', () => {

    const loggedUser: LoggedUser = new LoggedUser();
    const registerUserResponseContract = new RegisterUserResponseContract();
    loggedUser.id = 1;
    loggedUser.username = 'username';
    loggedUser.email = 'username@email.com';
    registerUserResponseContract.loggedUser = loggedUser;
    registerUserResponseContract.message = 'Usuário cadastrado com sucesso!';

    const registerUserResponseDto = service.toRegisterUserResponseDto(registerUserResponseContract);

    expect(registerUserResponseDto instanceof RegisterUserResponseDto);
    expect(registerUserResponseDto.message).toBe('Usuário cadastrado com sucesso!');
    expect(registerUserResponseDto.loggedUser instanceof LoggedUser).toBeTrue();
    expect(registerUserResponseDto.loggedUser.id).toBe(1);
    expect(registerUserResponseDto.loggedUser.username).toBe('username');
    expect(registerUserResponseDto.loggedUser.email).toBe('username@email.com');
  });
});
