import { Injectable } from '@angular/core';

import { LoginResponseContract } from '../../../../shared/contracts/response/login-response.contract';
import { LoginResponseDto } from '../../../../shared/dto/login-response.dto';

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
