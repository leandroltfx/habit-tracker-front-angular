import loginResponseMock from "../mocks/login-response.mock";
import { LoginRequestContract } from "../../contracts/request/login/login-request.contract";
import { LoginResponseContract } from "../../contracts/response/login/login-response.contract";
import { LoginResponseDto } from "../../dto/login/login-response.dto";

export class LoginAdapterServiceStub {

    public toLoginRequestContract(
        email: string,
        password: string,
    ) {
        const loginRequestContract = new LoginRequestContract();
        loginRequestContract.email = 'admin@email.com';
        loginRequestContract.password = 'admin123';
        return loginRequestContract;
    }

    public toLoginResponseDto(
        loginResponseContract: LoginResponseContract
    ) {
        const loginResponseDto: LoginResponseDto = new LoginResponseDto();
        loginResponseDto.message = loginResponseMock.message;
        loginResponseDto.loggedUser = loginResponseMock.loggedUser;
        return loginResponseDto;
    }

};
