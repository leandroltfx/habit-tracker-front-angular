import { of } from "rxjs";

import { RegisterUserRequestContract } from "../../contracts/request/register-user/register-user-request.contract";
import registerUserResponseMock from "../mocks/register-user-response.mock";

export class UserRegistrationProxyServiceStub {

    public registerUser(
        registerUserRequestContract: RegisterUserRequestContract
    ) {
        return of(registerUserResponseMock);
    }

}
