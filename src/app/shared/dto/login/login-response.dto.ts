import { LoggedUserDto } from "../logged-user/logged-user.dto";

export class LoginResponseDto {

    private _message!: string;
    private _loggedUser!: LoggedUserDto;

    constructor() {
        this._loggedUser = new LoggedUserDto();
    }

    public get message(): string {
        return this._message;
    }

    public set message(message: string) {
        this._message = message;
    }

    public get loggedUser(): LoggedUserDto {
        return this._loggedUser;
    }

    public set loggedUser(loggedUser: LoggedUserDto) {
        this._loggedUser = loggedUser;
    }
}
