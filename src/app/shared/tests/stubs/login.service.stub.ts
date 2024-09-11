import { of } from "rxjs";

import { LoginResponseDto } from "../../dto/login/login-response.dto";
import loginResponseMock from "../mocks/login-response.mock";

export class LoginServiceStub {

    public login(
        email: string,
        password: string,
    ) {
        const loginResponseDto: LoginResponseDto = new LoginResponseDto();
        loginResponseDto.message = loginResponseMock.message;
        loginResponseDto.loggedUser = loginResponseMock.loggedUser;
        return of(loginResponseDto);
    }

}