import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginRequestContract } from '../../contracts/request/login-request.contract';
import { LoginResponseContract } from '../../contracts/response/login-response.contract';
import loginResponseMock from '../../mocks/login-response.mock';

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
    const x: LoginResponseContract = new LoginResponseContract()
    return new Observable<LoginResponseContract>(observer => observer.next(loginResponseMock));
  }
}
