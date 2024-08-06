import { LoggedUserResponseContract, UserRegistrationResponseContract } from './user-registration-response.contract';

describe('UserRegistrationResponseContract', () => {
  it('should create an instance', () => {
    const userRegistrationResponseContract = new UserRegistrationResponseContract();
    expect(userRegistrationResponseContract).toBeTruthy();
  });
});
