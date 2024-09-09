import { Injectable } from '@angular/core';

import { LoginRequestContract } from '../../models/contracts/request/login-request.contract';
import { LoginResponseContract } from '../../models/contracts/response/login-response.contract';
import { LoginResponseDto } from '../../models/dto/login-response.dto';

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
