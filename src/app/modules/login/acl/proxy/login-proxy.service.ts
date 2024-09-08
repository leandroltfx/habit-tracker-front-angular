import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import loginResponseMock from '../../tests/mocks/login-response.mock';
import { LoginRequestContract } from '../../models/contracts/request/login-request.contract';
import { LoginResponseContract } from '../../models/contracts/response/login-response.contract';

@Injectable()
export class LoginProxyService {

  private readonly _basePath!: string;

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  login(
    loginRequestContract: LoginRequestContract,
  ): Observable<LoginResponseContract> {
    // return this._httpClient.post(`${this._basePath}/login`, loginRequestContract);
    return new Observable<LoginResponseContract>(observer => observer.next(loginResponseMock));
  }
}
