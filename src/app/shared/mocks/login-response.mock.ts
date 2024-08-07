import { LoginResponseContract } from "../contracts/response/login/login-response.contract";

const loginResponseMock: LoginResponseContract = new LoginResponseContract();

loginResponseMock.message = 'Login efetuado com sucesso!';
loginResponseMock.loggedUser.username = 'username';
loginResponseMock.loggedUser.email = 'email@email.com';

export default loginResponseMock;
