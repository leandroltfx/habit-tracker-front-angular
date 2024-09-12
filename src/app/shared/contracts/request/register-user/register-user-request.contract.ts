export class RegisterUserRequestContract {

    #username!: string;
    #email!: string;
    #password!: string;

    public get username(): string {
        return this.#username;
    }

    public set username(username: string) {
        this.#username = username;
    }

    public get email(): string {
        return this.#email;
    }

    public set email(email: string) {
        this.#email = email;
    }

    public get password(): string {
        return this.#password;
    }

    public set password(password: string) {
        this.#password = password;
    }

}
