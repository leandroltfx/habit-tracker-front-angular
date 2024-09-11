import { LoginResponseContract } from "../../contracts/response/login/login-response.contract";
import { LoggedUser } from "../../models/logged-user/logged-user.model";

const loggedUserMock: LoggedUser = new LoggedUser();
loggedUserMock.id = 1;
loggedUserMock.username = 'Admin';
loggedUserMock.email = 'admin@email.com';

const loginResponseMock: LoginResponseContract = new LoginResponseContract();
loginResponseMock.message = 'Login efetuado com sucesso!';
loginResponseMock.loggedUser = loggedUserMock;

export default loginResponseMock;