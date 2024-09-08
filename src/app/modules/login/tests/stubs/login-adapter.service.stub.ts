import { LoginRequestContract } from "../../models/contracts/request/login-request.contract";
import { LoginResponseDto } from "../../models/dto/login-response.dto";
import loginResponseMock from "../mocks/login-response.mock";

export class LoginAdapterServiceStub {

    toLoginRequestContract() {
        const loginRequestContract = new LoginRequestContract();
        loginRequestContract.email = 'admin@email.com';
        loginRequestContract.password = 'admin123';
        return loginRequestContract;
    }

    toLoginResponseDto() {
        const loginResponseDto: LoginResponseDto = new LoginResponseDto();
        loginResponseDto.message = loginResponseMock.message;
        loginResponseDto.loggedUser = loginResponseMock.loggedUser;
        return loginResponseDto;
    }

};
