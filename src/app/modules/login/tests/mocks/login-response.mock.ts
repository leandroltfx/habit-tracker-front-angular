import { LoggedUser } from "../../models/classes/logged-user/logged-user.model";
import { LoginResponseContract } from "../../models/contracts/response/login-response.contract";

const loggedUserMock: LoggedUser = new LoggedUser();
loggedUserMock.id = 1;
loggedUserMock.username = 'Admin';
loggedUserMock.email = 'admin@email.com';

const loginResponseMock: LoginResponseContract = new LoginResponseContract();
loginResponseMock.message = 'Login efetuado com sucesso!';
loginResponseMock.loggedUser = loggedUserMock;

export default loginResponseMock;