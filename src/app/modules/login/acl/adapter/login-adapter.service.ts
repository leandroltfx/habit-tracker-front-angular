import { Injectable } from '@angular/core';

import { LoginResponseDto } from '../../../../shared/dto/login/login-response.dto';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';

@Injectable()
export class LoginAdapterService {

  constructor() { }

  public loginResponseContractToDto(
    loginResponseContract: LoginResponseContract,
  ): LoginResponseDto {
    const loginResponseDto = new LoginResponseDto(
      loginResponseContract.message
    );
    return loginResponseDto;
  }
}
