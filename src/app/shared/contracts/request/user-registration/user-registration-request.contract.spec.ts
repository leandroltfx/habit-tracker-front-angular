import { UserRegistrationRequestContract } from './user-registration-request.contract';

describe('UserRegistrationRequestContract', () => {
  let userRegistrationRequestContract: UserRegistrationRequestContract;

  beforeEach(() => {
    userRegistrationRequestContract = new UserRegistrationRequestContract();
  });

  it('should create an instance', () => {
    expect(userRegistrationRequestContract).toBeTruthy();
  });

  it('get e set - username', () => {

    userRegistrationRequestContract.username = 'username';
    expect(userRegistrationRequestContract.username).toBe('username');
  });

  it('get e set - email', () => {

    userRegistrationRequestContract.email = 'email@email.com';
    expect(userRegistrationRequestContract.email).toBe('email@email.com');
  });

  it('get e set - password', () => {

    userRegistrationRequestContract.password = 'password';
    expect(userRegistrationRequestContract.password).toBe('password');
  });
});
