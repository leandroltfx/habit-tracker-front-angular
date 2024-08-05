import { UserRegistrationRequestContract } from './user-registration-request.contract';

describe('UserRegistrationRequestContract', () => {
  it('should create an instance', () => {
    const userRegistrationRequestContract = new UserRegistrationRequestContract('username', 'email@email.com', 'password');
    expect(userRegistrationRequestContract).toBeTruthy();
    expect(userRegistrationRequestContract.username).toBe('username');
    expect(userRegistrationRequestContract.email).toBe('email@email.com');
    expect(userRegistrationRequestContract.password).toBe('password');
  });
});
