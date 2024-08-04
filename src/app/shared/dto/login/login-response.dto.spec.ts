import { LoginResponseDto } from "./login-response.dto";

describe('LoginResponseDto', () => {
    let loginResponseDto: LoginResponseDto;

    beforeEach(() => {
        loginResponseDto = new LoginResponseDto('Login efetuado com sucesso!');
    });

    it('should create', () => {
        expect(loginResponseDto.message).toBe('Login efetuado com sucesso!');
    });
});
