import { RegisterUserResponseContract } from "../../contracts/response/register-user/register-user-response.contract";
import { LoggedUser } from "../../models/logged-user/logged-user.model";

const loggedUserMock: LoggedUser = new LoggedUser();
loggedUserMock.id = 1;
loggedUserMock.username = 'Admin';
loggedUserMock.email = 'admin@email.com';

const registerUserResponseMock: RegisterUserResponseContract = new RegisterUserResponseContract();
registerUserResponseMock.message = 'Usuário cadastrado com sucesso!';
registerUserResponseMock.loggedUser = loggedUserMock;

export default registerUserResponseMock;