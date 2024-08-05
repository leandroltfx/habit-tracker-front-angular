import { LoggedUser, UserRegistrationResponseContract } from './user-registration-response.contract';

describe('UserRegistrationResponseContract', () => {
  it('should create an instance', () => {
    expect(new UserRegistrationResponseContract('message', new LoggedUser('username', 'email@email.com'))).toBeTruthy();
  });
});
