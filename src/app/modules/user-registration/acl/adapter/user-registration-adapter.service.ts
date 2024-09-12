import { Injectable } from '@angular/core';

import { RegisterUserRequestContract } from '../../../../shared/contracts/request/register-user/register-user-request.contract';
import { RegisterUserResponseContract } from '../../../../shared/contracts/response/register-user/register-user-response.contract';
import { RegisterUserResponseDto } from '../../../../shared/dto/register-user/register-user-response.dto';

@Injectable()
export class UserRegistrationAdapterService {

  constructor() { }

  public toRegisterUserRequestContract(
    username: string,
    email: string,
    password: string,
  ): RegisterUserRequestContract {
    const registerUserRequestContract = new RegisterUserRequestContract();
    registerUserRequestContract.username = username;
    registerUserRequestContract.email = email;
    registerUserRequestContract.password = password;
    return registerUserRequestContract;
  }

  public toRegisterUserResponseDto(
    registerUserResponseContract: RegisterUserResponseContract
  ): RegisterUserResponseDto {
    const registerUserResponseDto: RegisterUserResponseDto = new RegisterUserResponseDto();
    registerUserResponseDto.message = registerUserResponseContract.message;
    registerUserResponseDto.loggedUser = registerUserResponseContract.loggedUser;
    return registerUserResponseDto;
  }
}
