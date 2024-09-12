import { of } from "rxjs";

import { RegisterUserResponseDto } from "../../dto/register-user/register-user-response.dto";
import registerUserResponseMock from "../mocks/register-user-response.mock";

export class UserRegistrationServiceStub {

    public registerUser(
        username: string,
        email: string,
        password: string,
    ) {
        const registerUserResponseDto: RegisterUserResponseDto = new RegisterUserResponseDto();
        registerUserResponseDto.message = registerUserResponseMock.message;
        registerUserResponseDto.loggedUser = registerUserResponseMock.loggedUser;
        return of(registerUserResponseDto);
    }

}
