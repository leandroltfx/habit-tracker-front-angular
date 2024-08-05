import { LoggedUser, UserRegistrationResponseContract } from "../contracts/response/user-registration/user-registration-response.contract";

export const userRegistrationResponseMock: UserRegistrationResponseContract = new UserRegistrationResponseContract(
    'Usuário cadastrado com sucesso!',
    new LoggedUser('username', 'admin@email.com')
);
