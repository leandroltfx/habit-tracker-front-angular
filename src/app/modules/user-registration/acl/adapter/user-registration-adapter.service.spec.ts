import { TestBed } from '@angular/core/testing';

import { UserRegistrationAdapterService } from './user-registration-adapter.service';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';
import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response.dto';

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

  it('userRegistrationResponseContractToDto - deve transformar contrato de resposta do cadastro de usuário em dto', () => {
    const userRegistrationResponseContract: UserRegistrationResponseContract = new UserRegistrationResponseContract();
    userRegistrationResponseContract.message = 'Login efetuado com sucesso!';
    userRegistrationResponseContract.loggedUser.username = 'username';
    userRegistrationResponseContract.loggedUser.email = 'email@email.com';

    const userRegistrationResponseDto: UserRegistrationResponseDto = service.userRegistrationResponseContractToDto(userRegistrationResponseContract);
    expect(userRegistrationResponseDto.message).toBe('Login efetuado com sucesso!');
  });
});
