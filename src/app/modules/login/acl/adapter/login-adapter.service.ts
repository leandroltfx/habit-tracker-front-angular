import { Injectable } from '@angular/core';

import { LoginRequestContract } from '../../../../shared/contracts/request/login/login-request.contract';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';
import { LoginResponseDto } from '../../../../shared/dto/login/login-response.dto';

@Injectable()
export class LoginAdapterService {

  constructor() { }

  public toLoginRequestContract(
    email: string,
    password: string,
  ): LoginRequestContract {
    const loginRequestContract = new LoginRequestContract();
    loginRequestContract.email = email;
    loginRequestContract.password = password;
    return loginRequestContract;
  }

  public toLoginResponseDto(
    loginResponseContract: LoginResponseContract
  ): LoginResponseDto {
    const loginResponseDto: LoginResponseDto = new LoginResponseDto();
    loginResponseDto.message = loginResponseContract.message;
    loginResponseDto.loggedUser = loginResponseContract.loggedUser;
    return loginResponseDto;
  }
}
