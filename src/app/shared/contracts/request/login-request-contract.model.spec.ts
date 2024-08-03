import { LoginRequestContract } from "./login-request-contract.model";

describe('LoginRequestContract', () => {
    let loginRequestContract: LoginRequestContract;

    beforeEach(() => {
        loginRequestContract = new LoginRequestContract('admin@email.com', 'admin123');
    });

    it('should create', () => {

        expect(loginRequestContract.email).toBe('admin@email.com');
        expect(loginRequestContract.password).toBe('admin123');
    });
});
