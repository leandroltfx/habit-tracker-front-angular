import { LoginRequestContract } from './login-request.contract';

describe('LoginRequestContract', () => {
  it('should create an instance', () => {
    const loginRequestContract = new LoginRequestContract();
    expect(loginRequestContract).toBeTruthy();
  });
});
