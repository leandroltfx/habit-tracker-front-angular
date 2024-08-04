import { LoginResponseContract } from "./login-response.contract";

describe('LoginResponseContract', () => {
    let loginResponseContract: LoginResponseContract;

    beforeEach(() => {
        loginResponseContract = {
            message: 'Login efetuado com sucesso!'
        };
    });

    it('should create', () => {
        expect(loginResponseContract.message).toBe('Login efetuado com sucesso!');
    });
});
