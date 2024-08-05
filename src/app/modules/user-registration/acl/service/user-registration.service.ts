import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { UserRegistrationProxyService } from '../proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from '../adapter/user-registration-adapter.service';
import { UserRegistrationRequestContract } from '../../../../shared/contracts/request/user-registration/user-registration-request.contract';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';

@Injectable()
export class UserRegistrationService {

  constructor(
    private readonly _userRegistrationProxyService: UserRegistrationProxyService,
    private readonly _userRegistrationAdapterService: UserRegistrationAdapterService,
  ) { }

  registerUser(
    userRegistraionRequestContract: UserRegistrationRequestContract
  ) {
    return this._userRegistrationProxyService.registerUser(
      userRegistraionRequestContract
    ).pipe(
      map(
        (userRegistrationResponseContract: UserRegistrationResponseContract) => {
          return this._userRegistrationAdapterService.userRegistrationResponseContractToDto(userRegistrationResponseContract);
        }
      )
    )
  }
}
