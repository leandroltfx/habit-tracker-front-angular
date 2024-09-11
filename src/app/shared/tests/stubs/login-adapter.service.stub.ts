import { LoginRequestContract } from "../../contracts/request/login/login-request.contract";
import { LoginResponseDto } from "../../dto/login/login-response.dto";
import loginResponseMock from "../mocks/login-response.mock";

export class LoginAdapterServiceStub {

    public toLoginRequestContract() {
        const loginRequestContract = new LoginRequestContract();
        loginRequestContract.email = 'admin@email.com';
        loginRequestContract.password = 'admin123';
        return loginRequestContract;
    }

    public toLoginResponseDto() {
        const loginResponseDto: LoginResponseDto = new LoginResponseDto();
        loginResponseDto.message = loginResponseMock.message;
        loginResponseDto.loggedUser = loginResponseMock.loggedUser;
        return loginResponseDto;
    }

};
