import { SnackType } from "@/enums/snackType.enum";
import { AuthenticationState } from "@/reducers/authentication";
import { MainState } from "@/reducers/mainReducer";
import { CredentialOutput } from "@/types/credentials";

export enum AuthenticationType {
    CHANGE_AUTHENTICATIONPAGE_FIELDS = "CHANGE_AUTHENTICATIONPAGE_FIELDS",
    SUBMIT_LOGIN_FORM="SUBMIT_LOGIN_FORM",
}

export const changeAuthenticationPageFields = (payload: Partial<AuthenticationState>) => ({
  type: AuthenticationType.CHANGE_AUTHENTICATIONPAGE_FIELDS,
  payload,
});
export const submitLogInForm = (login: string, password: string) => ({
  type: AuthenticationType.SUBMIT_LOGIN_FORM,
  login,
  password
});

