import { LoginRequestContract } from './login-request.contract';

describe('LoginRequestContract', () => {

  let loginRequestContract: LoginRequestContract;

  beforeEach(() => {
    loginRequestContract = new LoginRequestContract();
  });

  it('should create an instance', () => {
    expect(loginRequestContract).toBeTruthy();
  });

  it('get e set - email', () => {

    loginRequestContract.email = 'email@email.com';
    expect(loginRequestContract.email).toBe('email@email.com');
  });

  it('get e set - password', () => {

    loginRequestContract.password = 'password';
    expect(loginRequestContract.password).toBe('password');
  });
});
