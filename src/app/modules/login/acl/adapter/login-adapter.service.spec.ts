import { TestBed } from '@angular/core/testing';

import { LoginAdapterService } from './login-adapter.service';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response.dto';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';

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

  it('loginResponseContractToDto - deve transformar contrato de resposta do login em dto', () => {
    const loginResponseContract: LoginResponseContract = new LoginResponseContract(
      'Login efetuado com sucesso!'
    );
    const loginResponseDto: LoginResponseDto = service.loginResponseContractToDto(loginResponseContract);
    expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
  });
});
