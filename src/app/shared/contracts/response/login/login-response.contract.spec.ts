import { LoginResponseContract } from './login-response.contract';

describe('LoginResponseContract', () => {

  let loginResponseContract: LoginResponseContract;

  beforeEach(() => {
    loginResponseContract = new LoginResponseContract();
  });

  it('should create an instance', () => {
    expect(loginResponseContract).toBeTruthy();
  });

  it('get e set - message', () => {
    loginResponseContract.message = 'message';

    expect(loginResponseContract.message).toBe('message');
  });

  it('get e set - loggedUser properties', () => {
    loginResponseContract.loggedUser.username = 'username';
    loginResponseContract.loggedUser.email = 'email';

    expect(loginResponseContract.loggedUser instanceof Object).toBeTruthy();
    expect(Object.keys(loginResponseContract.loggedUser).length).toBe(2);
    expect(loginResponseContract.loggedUser.username).toBe('username');
    expect(loginResponseContract.loggedUser.email).toBe('email');
  });
});
