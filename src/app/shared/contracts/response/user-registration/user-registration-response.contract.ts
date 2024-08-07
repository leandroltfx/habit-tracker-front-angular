export class LoggedUserResponseContract {

    private _username!: string;
    private _email!: string;

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

export class UserRegistrationResponseContract {

    private _message!: string;
    private _loggedUser!: LoggedUserResponseContract;

    constructor() {
        this.loggedUser = new LoggedUserResponseContract();
    }

    public get message(): string {
        return this._message;
    }

    public set message(message: string) {
        this._message = message;
    }

    public get loggedUser(): LoggedUserResponseContract {
        return this._loggedUser;
    }

    public set loggedUser(loggedUser: LoggedUserResponseContract) {
        this._loggedUser = loggedUser;
    }
}
