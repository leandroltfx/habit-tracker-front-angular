import { Injectable } from '@angular/core';
import { LoginRequestContract } from '../../contracts/request/login-request.contract';
import { LoginResponseContract } from '../../contracts/response/login-response.contract';
import { LoginResponseDto } from '../../dto/login-response.dto';

@Injectable()
export class LoginAdapterService {

  constructor() { }

  toLoginRequestContract(
    email: string,
    password: string,
  ): LoginRequestContract {
    const loginRequestContract = new LoginRequestContract();
    loginRequestContract.email = email;
    loginRequestContract.password = password;
    return loginRequestContract;
  }

  toLoginResponseDto(
    loginResponseContract: LoginResponseContract
  ): LoginResponseDto {
    const loginResponseDto: LoginResponseDto = new LoginResponseDto();
    loginResponseDto.message = loginResponseContract.message;
    loginResponseDto.loggedUser = loginResponseContract.loggedUser;
    return loginResponseDto;
  }
}
