export class LoginResponseContract {

    private _message!: string;

    constructor(
        message: string
    ) {
        this.message = message;
    }
    
    public get message() : string {
        return this._message;
    }

    public set message(message : string) {
        this._message = message;
    }
}
