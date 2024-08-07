import { LoginResponseDto } from './login-response.dto';

describe('LoginResponseDto', () => {

  let loginResponseDto: LoginResponseDto;

  beforeEach(() => {
    loginResponseDto = new LoginResponseDto();
  });

  it('should create an instance', () => {
    expect(loginResponseDto).toBeTruthy();
  });

  it('get e set - message', () => {
    loginResponseDto.message = 'message';

    expect(loginResponseDto.message).toBe('message');
  });

  it('get e set - loggedUser properties', () => {
    loginResponseDto.loggedUser.username = 'username';
    loginResponseDto.loggedUser.email = 'email';

    expect(loginResponseDto.loggedUser instanceof Object).toBeTruthy();
    expect(Object.keys(loginResponseDto.loggedUser).length).toBe(2);
    expect(loginResponseDto.loggedUser.username).toBe('username');
    expect(loginResponseDto.loggedUser.email).toBe('email');
  });
});
