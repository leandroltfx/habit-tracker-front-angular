import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginResponseContract } from '../../../../shared/contracts/response/login/login-response.contract';
import { loginResponseMock } from '../../../../shared/mocks/login-response.mock';
import { LoginRequestContract } from '../../../../shared/contracts/request/login/login-request.contract';

@Injectable()
export class LoginProxyService {

  constructor() { }

  public login(loginRequestContract: LoginRequestContract): Observable<LoginResponseContract> {
    return new Observable(observer => observer.next(loginResponseMock));
  }
}
