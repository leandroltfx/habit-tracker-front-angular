export class LoginResponseDto {

    private _message!: string;

    constructor(
        message: string,
    ) {
        this.message = message;
    }

    get message(): string {
        return this._message;
    }

    set message(message: string) {
        this._message = message;
    }

};
