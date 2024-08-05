import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { userRegistrationResponseMock } from '../../../../shared/mocks/user-registration-response.mock';
import { UserRegistrationRequestContract } from '../../../../shared/contracts/request/user-registration/user-registration-request.contract';
import { UserRegistrationResponseContract } from '../../../../shared/contracts/response/user-registration/user-registration-response.contract';

@Injectable()
export class UserRegistrationProxyService {

  constructor() { }

  registerUser(
    userRegistraionRequestContract: UserRegistrationRequestContract
  ): Observable<UserRegistrationResponseContract> {
    return new Observable<UserRegistrationResponseContract>(observer => observer.next(userRegistrationResponseMock));
  }
}
