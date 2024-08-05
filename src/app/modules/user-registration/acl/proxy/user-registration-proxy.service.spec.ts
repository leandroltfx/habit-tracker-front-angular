import { TestBed } from '@angular/core/testing';

import { UserRegistrationProxyService } from './user-registration-proxy.service';
import { UserRegistrationRequestContract } from 'src/app/shared/contracts/request/user-registration/user-registration-request.contract';

describe('UserRegistrationProxyService', () => {
  let service: UserRegistrationProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserRegistrationProxyService,
      ]
    });
    service = TestBed.inject(UserRegistrationProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('registerUser - deve retornar mensagem de sucesso após o cadastro de usuário', () => {
    const userRegistrationRequestContract: UserRegistrationRequestContract = new UserRegistrationRequestContract(
      'admin',
      'admin@email.com',
      'admin123',
    );
    service.registerUser(userRegistrationRequestContract).subscribe(
      userRegistrationResponse => {
        expect(userRegistrationResponse.message).toBe('Usuário cadastrado com sucesso!')
      }
    );
  });
});
