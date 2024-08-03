import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { LoginProxyService } from '../proxy/login-proxy.service';
import { LoginAdapterService } from '../adapter/login-adapter.service';
import { LoginResponseContract } from '../../../../shared/contracts/response/login-response.contract';
import { LoginResponseDto } from '../../../../shared/dto/login-response.dto';
import { LoginRequestContract } from '../../../../shared/contracts/request/login-request.contract';

@Injectable()
export class LoginService {

  constructor(
    private readonly _loginProxyService: LoginProxyService,
    private readonly _loginAdapterService: LoginAdapterService,
  ) { }

  public login(loginRequestContract: LoginRequestContract): Observable<LoginResponseDto> {
    return this._loginProxyService.login(loginRequestContract).pipe(
      map((loginResponseContract: LoginResponseContract) => this._loginAdapterService.loginResponseContractToDto(loginResponseContract))
    );
  }
}
