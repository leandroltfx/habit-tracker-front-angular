import { of } from "rxjs";

import loginResponseMock from "../mocks/login-response.mock";

export class LoginProxyServiceStub {

    login() {
        return of(loginResponseMock);
    }

};
