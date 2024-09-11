import { of } from "rxjs";

import loginResponseMock from "../mocks/login-response.mock";
import { LoginRequestContract } from "../../contracts/request/login/login-request.contract";

export class LoginProxyServiceStub {

    public login(
        loginRequestContract: LoginRequestContract
    ) {
        return of(loginResponseMock);
    }

};
