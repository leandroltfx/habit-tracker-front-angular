export class UserRegistrationRequestContract {

    private _username!: string;
    private _email!: string;
    private _password!: string;

    constructor(
        username: string,
        email: string,
        password: string,
    ) {
        this.username = username;
        this.email = email;
        this.password = password;
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

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }
}
