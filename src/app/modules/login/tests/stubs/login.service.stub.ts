import { of } from "rxjs";

import loginResponseMock from "../mocks/login-response.mock";
import { LoginResponseDto } from "../../models/dto/login-response.dto";

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