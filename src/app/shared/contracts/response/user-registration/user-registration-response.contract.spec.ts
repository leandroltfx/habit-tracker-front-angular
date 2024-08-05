import { LoggedUser, UserRegistrationResponseContract } from './user-registration-response.contract';

describe('UserRegistrationResponseContract', () => {
  it('should create an instance', () => {
    const userRegistrationResponseContract = new UserRegistrationResponseContract('message', new LoggedUser('username', 'email@email.com'));
    expect(userRegistrationResponseContract).toBeTruthy();
    expect(userRegistrationResponseContract.message).toBe('message');
    expect(userRegistrationResponseContract.loggedUser.username).toBe('username');
    expect(userRegistrationResponseContract.loggedUser.email).toBe('email@email.com');
  });
});
