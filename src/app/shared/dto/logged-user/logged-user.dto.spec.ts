import { LoggedUserDto } from './logged-user.dto';

describe('LoggedUserDto', () => {

  let loggedUserDto: LoggedUserDto;

  beforeEach(() => {
    loggedUserDto = new LoggedUserDto();
  });

  it('should create an instance', () => {
    expect(loggedUserDto).toBeTruthy();
  });

  it('get e set - email', () => {

    loggedUserDto.email = 'email@email.com';

    expect(loggedUserDto.email).toBe('email@email.com');
  });

  it('get e set - username', () => {

    loggedUserDto.username = 'username';

    expect(loggedUserDto.username).toBe('username');
  });
});
