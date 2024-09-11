export class LoggedUser {
    
    #id!: number;
    #username!: string;
    #email!: string;

    public get id(): number {
        return this.#id;
    }
    
    public set id(id: number) {
        this.#id = id;
    }

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
}
