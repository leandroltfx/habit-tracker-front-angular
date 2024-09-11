import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginRequestContract } from '../../../../shared/contracts/request/login/login-request.contract';
import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';
import loginResponseMock from '../../../../shared/tests/mocks/login-response.mock';

@Injectable()
export class LoginProxyService {

  private readonly _basePath!: string;

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  public login(
    loginRequestContract: LoginRequestContract,
  ): Observable<LoginResponseContract> {
    // return this._httpClient.post(`${this._basePath}/login`, loginRequestContract);
    return new Observable<LoginResponseContract>(observer => observer.next(loginResponseMock));
  }
}
