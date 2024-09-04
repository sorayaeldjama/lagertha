import { AnyAction } from "redux";
import { MainType } from "@/actions/main";
import { Role } from "@/enums/roles.enum";
import { Jwt } from "@/types/jwt";
import { Snack } from "@/types/snack";
import { SnackType } from "@/enums/snackType.enum";
import { AuthenticationType } from "@/actions/authentication";

export type AuthenticationState = {
    isLoginFormOpen: boolean;
    // isSignUpFormOpen: boolean;
    logInLogin: string;
    logInPassword: string;
    loginEmail: string;
    loadingLoginForm: boolean;
    is_otp_need: boolean;
    totp_code: string;
};
const initialState: AuthenticationState = {
    isLoginFormOpen: false,
    // isSignUpFormOpen: false,
    logInLogin: "",
    logInPassword: "",
    loginEmail: "",
    loadingLoginForm: false,
    is_otp_need: false,
    totp_code: ""
};

const authenticationReducer = (
    state: AuthenticationState = initialState,
    action: AnyAction = { type: "" }
) => {
    switch (action.type) {
        case AuthenticationType.CHANGE_AUTHENTICATIONPAGE_FIELDS: {
            return {
                ...state,
                ...action.payload,
            } as AuthenticationState;
        }
        default:
            return state as AuthenticationState;
    }
};

export default authenticationReducer;
