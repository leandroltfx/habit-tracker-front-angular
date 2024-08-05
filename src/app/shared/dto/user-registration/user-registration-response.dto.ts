export class LoggedUser {

    private _username!: string;
    private _email!: string;

    constructor(
        username: string,
        email: string,
    ) {
        this._username = username;
        this._email = email;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        this._username = username;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }
}

export class UserRegistrationResponseDto {

    private _message!: string;
    private _loggedUser!: LoggedUser;

    constructor(
        message: string,
        loggedUser: LoggedUser,
    ) {
        this.message = message;
        this.loggedUser = loggedUser;
    }

    public get message(): string {
        return this._message;
    }

    public set message(message: string) {
        this._message = message;
    }

    public get loggedUser(): LoggedUser {
        return this._loggedUser;
    }

    public set loggedUser(loggedUser: LoggedUser) {
        this._loggedUser = loggedUser;
    }
}
