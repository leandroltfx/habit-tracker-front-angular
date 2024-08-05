import { LoggedUser, UserRegistrationResponseDto } from "./user-registration-response.dto";

describe('UserRegistrationResponseDto', () => {
  it('should create an instance', () => {
    expect(new UserRegistrationResponseDto('message', new LoggedUser('usernane', 'email@email.com'))).toBeTruthy();
  });
});
