export class LoginRequestContract {

    #email!: string;
    #password!: string;

    public get email() {
        return this.#email;
    }

    public set email(email: string) {
        this.#email = email;
    }

    public get password() {
        return this.#password;
    }

    public set password(password: string) {
        this.#password = password;
    }

}
