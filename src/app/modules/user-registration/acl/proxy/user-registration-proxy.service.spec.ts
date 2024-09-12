import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserRegistrationProxyService } from './user-registration-proxy.service';
import { RegisterUserRequestContract } from 'src/app/shared/contracts/request/register-user/register-user-request.contract';
import { RegisterUserResponseContract } from 'src/app/shared/contracts/response/register-user/register-user-response.contract';

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

  it('registerUser - deve devolver um objeto do tipo RegisterUserResponseContract', () => {

    const registerUserRequestContract: RegisterUserRequestContract = new RegisterUserRequestContract();
    registerUserRequestContract.username = 'admin';
    registerUserRequestContract.email = 'admin@email.com';
    registerUserRequestContract.password = 'admin123';

    service.registerUser(registerUserRequestContract).subscribe(
      registerUserResponseContract => {
        expect(registerUserResponseContract instanceof RegisterUserResponseContract).toBeTrue();
        expect(registerUserResponseContract.message).toBe('Usuário cadastrado com sucesso!');
        expect(registerUserResponseContract.loggedUser.id).toBe(1);
        expect(registerUserResponseContract.loggedUser.username).toBe('Admin');
        expect(registerUserResponseContract.loggedUser.email).toBe('admin@email.com');
      }
    );
  });
});
