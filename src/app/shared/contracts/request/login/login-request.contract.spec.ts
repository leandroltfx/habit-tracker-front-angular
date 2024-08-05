import { LoginRequestContract } from './login-request.contract';

describe('LoginRequestContract', () => {
  it('should create an instance', () => {
    const loginRequestContract = new LoginRequestContract('email@email.com', 'password')
    expect(loginRequestContract).toBeTruthy();
    expect(loginRequestContract.email).toBe('email@email.com');
    expect(loginRequestContract.password).toBe('password');
  });
});
