import { UserRegistrationResponseContract } from "../contracts/response/user-registration/user-registration-response.contract";

const userRegistrationResponseMock: UserRegistrationResponseContract = new UserRegistrationResponseContract();

userRegistrationResponseMock.message = 'Usuário cadastrado com sucesso!';
userRegistrationResponseMock.loggedUser.username = 'username';
userRegistrationResponseMock.loggedUser.email = 'email@email.com';

export default userRegistrationResponseMock;
