import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { UserRegistrationService } from './user-registration.service';
import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';
import { UserRegistrationRequestContract } from '../../../../shared/contracts/request/user-registration/user-registration-request.contract';
import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response.dto';
import userRegistrationResponseMock from 'src/app/shared/mocks/user-registration-response.mock';

describe('UserRegistrationService', () => {
  let userRegistrationService: UserRegistrationService;

  let userRegistrationProxyServiceSpy: jasmine.SpyObj<UserRegistrationProxyService>;

  beforeEach(() => {

    userRegistrationProxyServiceSpy = jasmine.createSpyObj<UserRegistrationProxyService>('UserRegistrationProxyService', ['registerUser']);

    TestBed.configureTestingModule({
      providers: [
        UserRegistrationService,
        UserRegistrationAdapterService,
        { provide: UserRegistrationProxyService, useValue: userRegistrationProxyServiceSpy },
      ]
    });
    userRegistrationService = TestBed.inject(UserRegistrationService);
  });

  it('should be created', () => {
    expect(userRegistrationService).toBeTruthy();
  });

  it('registerUser - deve retornar um dto na resposta do cadastro de usuário', () => {

    const userRegistrationResponseContract: UserRegistrationResponseContract = new UserRegistrationResponseContract();
    userRegistrationResponseContract.message = 'Usuário cadastrado com sucesso!';
    userRegistrationResponseContract.loggedUser.username = 'username';
    userRegistrationResponseContract.loggedUser.email = 'email@email.com';

    userRegistrationProxyServiceSpy.registerUser.and.returnValue(of(userRegistrationResponseMock));

    const userRegistrationRequestContract: UserRegistrationRequestContract = new UserRegistrationRequestContract();
    userRegistrationRequestContract.username = 'admin';
    userRegistrationRequestContract.email = 'admin@email.com';
    userRegistrationRequestContract.password = 'admin123';

    userRegistrationService.registerUser(userRegistrationRequestContract).subscribe(
      userRegistrationResponseDto => {
        expect(userRegistrationResponseDto instanceof UserRegistrationResponseDto).toBeTrue();
        expect(userRegistrationResponseDto.message).toBe('Usuário cadastrado com sucesso!');
      }
    );
  });
});
