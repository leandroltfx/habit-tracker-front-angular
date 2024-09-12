import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RegisterUserRequestContract } from '../../../../shared/contracts/request/register-user/register-user-request.contract';
import { RegisterUserResponseContract } from '../../../../shared/contracts/response/register-user/register-user-response.contract';
import registerUserResponseMock from '../../../../shared/tests/mocks/register-user-response.mock';

@Injectable()
export class UserRegistrationProxyService {

  private readonly _basePath!: string;

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  public registerUser(
    registerUserRequestContract: RegisterUserRequestContract
  ): Observable<RegisterUserResponseContract> {
    // return this._httpClient.post(`${this._basePath}/user`, registerUserRequestContract);
    return new Observable<RegisterUserResponseContract>(observer => observer.next(registerUserResponseMock));
  }
}
