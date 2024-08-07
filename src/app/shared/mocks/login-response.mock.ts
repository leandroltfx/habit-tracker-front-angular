import { LoginResponseContract } from "../contracts/response/login/login-response.contract";

const loginResponseMock: LoginResponseContract = new LoginResponseContract();

loginResponseMock.message = 'Login efetuado com sucesso!';

export default loginResponseMock;
