import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginResponseDto } from '../../models/dto/login-response.dto';
import { LoginResponseContract } from '../../models/contracts/response/login-response.contract';

@Injectable()
export class LoginService {

  constructor(
    private readonly _loginAdapterService: LoginAdapterService,
    private readonly _loginProxyService: LoginProxyService,
  ) { }

  public login(
    email: string,
    password: string,
  ): Observable<LoginResponseDto> {
    return this._loginProxyService.login(
      this._loginAdapterService.toLoginRequestContract(email, password)
    ).pipe(
      map((loginResponseContract: LoginResponseContract) => this._loginAdapterService.toLoginResponseDto(loginResponseContract))
    )
  }
}
