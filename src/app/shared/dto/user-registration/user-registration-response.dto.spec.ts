import { UserRegistrationResponseDto } from "./user-registration-response.dto";

describe('UserRegistrationResponseDto', () => {
  let userRegistrationResponseDto: UserRegistrationResponseDto;

  beforeEach(() => {
    userRegistrationResponseDto = new UserRegistrationResponseDto();
  });

  it('should create an instance', () => {
    expect(userRegistrationResponseDto).toBeTruthy();
  });

  it('get e set - message', () => {
    userRegistrationResponseDto.message = 'message';

    expect(userRegistrationResponseDto.message).toBe('message');
  });

  it('get e set - loggedUser properties', () => {
    userRegistrationResponseDto.loggedUser.username = 'username';
    userRegistrationResponseDto.loggedUser.email = 'email';

    expect(userRegistrationResponseDto.loggedUser instanceof Object).toBeTruthy();
    expect(Object.keys(userRegistrationResponseDto.loggedUser).length).toBe(2);
    expect(userRegistrationResponseDto.loggedUser.username).toBe('username');
    expect(userRegistrationResponseDto.loggedUser.email).toBe('email');
  });
});
