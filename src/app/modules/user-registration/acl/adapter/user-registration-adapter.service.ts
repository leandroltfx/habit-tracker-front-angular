import { Injectable } from '@angular/core';

import { LoggedUser, UserRegistrationResponseDto } from '../../../../shared/dto/user-registration/user-registration-response.dto';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';

@Injectable()
export class UserRegistrationAdapterService {

  constructor() { }

  userRegistrationResponseContractToDto(
    userRegistrationResponseContract: UserRegistrationResponseContract
  ): UserRegistrationResponseDto {

    const loggedUser: LoggedUser = new LoggedUser(
      userRegistrationResponseContract.loggedUser.username,
      userRegistrationResponseContract.loggedUser.email,
    );

    const userRegistrationResponseDto: UserRegistrationResponseDto = new UserRegistrationResponseDto(
      userRegistrationResponseContract.message,
      loggedUser,
    );

    return userRegistrationResponseDto;
  }
}
