import { Injectable } from '@angular/core';

import { UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response.dto';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';

@Injectable()
export class UserRegistrationAdapterService {

  constructor() { }

  userRegistrationResponseContractToDto(
    userRegistrationResponseContract: UserRegistrationResponseContract
  ): UserRegistrationResponseDto {
    const userRegistrationResponseDto: UserRegistrationResponseDto = new UserRegistrationResponseDto();
    userRegistrationResponseDto.message = userRegistrationResponseContract.message;
    userRegistrationResponseDto.loggedUser.email = userRegistrationResponseContract.loggedUser.email;
    userRegistrationResponseDto.loggedUser.username = userRegistrationResponseContract.loggedUser.username;

    return userRegistrationResponseDto;
  }
}
