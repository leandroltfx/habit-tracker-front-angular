import { UserRegistrationRequestContract } from './user-registration-request.contract';

describe('UserRegistrationRequestContract', () => {
  it('should create an instance', () => {
    const userRegistrationRequestContract = new UserRegistrationRequestContract();
    expect(userRegistrationRequestContract).toBeTruthy();
  });
});
