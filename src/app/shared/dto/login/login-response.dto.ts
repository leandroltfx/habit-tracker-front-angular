import { LoggedUser } from "../../models/logged-user/logged-user.model";

export class LoginResponseDto {

    #message!: string;
    #loggedUser!: LoggedUser;

    public get message(): string {
        return this.#message;
    }
    
    public set message(message: string) {
        this.#message = message;
    }

    public get loggedUser(): LoggedUser {
        return this.#loggedUser;
    }
    
    public set loggedUser(loggedUser: LoggedUser) {
        this.#loggedUser = loggedUser;
    }
}
