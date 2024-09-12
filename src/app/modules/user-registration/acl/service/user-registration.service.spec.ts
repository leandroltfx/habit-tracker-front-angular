import { TestBed } from '@angular/core/testing';

import { UserRegistrationService } from './user-registration.service';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationAdapterServiceStub } from '../../../../shared/tests/stubs/user-registration-adapter.service.stub';
import { UserRegistrationProxyServiceStub } from '../../../../shared/tests/stubs/user-registration-proxy.service.stub';
import { RegisterUserResponseDto } from 'src/app/shared/dto/register-user/register-user-response.dto';
import { LoggedUser } from 'src/app/shared/models/logged-user/logged-user.model';

describe('UserRegistrationService', () => {
  let service: UserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRegistrationService,
        { provide: UserRegistrationAdapterService, useClass: UserRegistrationAdapterServiceStub },
        { provide: UserRegistrationProxyService, useClass: UserRegistrationProxyServiceStub },
      ]
    });
    service = TestBed.inject(UserRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('registerUser, deve retornar um objeto do tipo RegisterUserResponseDto', () => {

    service.registerUser('username', 'email@email.com', 'abc123').subscribe(
      registerUserResponseDto => {
        expect(registerUserResponseDto instanceof RegisterUserResponseDto);
        expect(registerUserResponseDto.message).toBe('Usuário cadastrado com sucesso!');
        expect(registerUserResponseDto.loggedUser instanceof LoggedUser).toBeTrue();
        expect(registerUserResponseDto.loggedUser.id).toBe(1);
        expect(registerUserResponseDto.loggedUser.username).toBe('Admin');
        expect(registerUserResponseDto.loggedUser.email).toBe('admin@email.com');
      }
    );
  });
});
