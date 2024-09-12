import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { RegisterUserResponseDto } from '../../../../shared/dto/register-user/register-user-response.dto';
import { RegisterUserResponseContract } from '../../../../shared/contracts/response/register-user/register-user-response.contract';

@Injectable()
export class UserRegistrationService {

  constructor(
    private readonly _userRegistrationAdapterService: UserRegistrationAdapterService,
    private readonly _userRegistrationProxyService: UserRegistrationProxyService,
  ) { }

  public registerUser(
    username: string,
    email: string,
    password: string,
  ): Observable<RegisterUserResponseDto> {
    return this._userRegistrationProxyService.registerUser(
      this._userRegistrationAdapterService.toRegisterUserRequestContract(username, email, password)
    ).pipe(
      map((registerUserResponseContract: RegisterUserResponseContract) => this._userRegistrationAdapterService.toRegisterUserResponseDto(registerUserResponseContract))
    )
  }
}
