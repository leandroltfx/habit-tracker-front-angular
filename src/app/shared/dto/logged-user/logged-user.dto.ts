export class LoggedUserDto {

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
