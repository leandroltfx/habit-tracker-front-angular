import { RegisterUserRequestContract } from "../../contracts/request/register-user/register-user-request.contract";
import { RegisterUserResponseContract } from "../../contracts/response/register-user/register-user-response.contract";
import { RegisterUserResponseDto } from "../../dto/register-user/register-user-response.dto";
import registerUserResponseMock from "../mocks/register-user-response.mock";

export class UserRegistrationAdapterServiceStub {

    public toRegisterUserRequestContract(
        username: string,
        email: string,
        password: string,
    ) {
        const registerUserRequestContract = new RegisterUserRequestContract();
        registerUserRequestContract.username = 'admin';
        registerUserRequestContract.email = 'admin@email.com';
        registerUserRequestContract.password = 'admin123';
        return registerUserRequestContract;
    }

    public toRegisterUserResponseDto(
        registerUserResponseContract: RegisterUserResponseContract
    ) {
        const registerUserResponseDto: RegisterUserResponseDto = new RegisterUserResponseDto();
        registerUserResponseDto.message = registerUserResponseMock.message;
        registerUserResponseDto.loggedUser = registerUserResponseMock.loggedUser;
        return registerUserResponseDto;
    }

};