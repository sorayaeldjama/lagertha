import { SnackType } from "@/enums/snackType.enum";
import { MainState } from "@/reducers/mainReducer";
import { ErrorObject } from "@/services/openapi";
import { CredentialOutput, CredentialOutputTransfer } from "@/types/credentials";
// import { CredentialOutput } from "@/services/openapi";

export enum MainType {
  CHANGE_MAINPAGE_FIELDS = "CHANGE_MAINPAGE_FIELDS",
  LOG_USER = "LOG_USER",
  CHECK_IS_LOGGED = "CHECK_IS_LOGGED",
  LOGOUT = "LOGOUT",
  ADD_SNACK='ADD_SNACK',
  CLOSE_SNACK='CLOSE_SNACK',
  GET_CREDITS = 'GET_CREDITS'
}
export const changeMainPageFields = (payload: Partial<MainState>) => ({
  type: MainType.CHANGE_MAINPAGE_FIELDS,
  payload,
});
export const logUser = (creds: CredentialOutput, credsLogin: CredentialOutputTransfer | ErrorObject) => ({
  type: MainType.LOG_USER,
  creds,
  credsLogin
});
export const checkIsLogged = () => ({
  type: MainType.CHECK_IS_LOGGED,
});
export const logout = () => ({
  type: MainType.LOGOUT,
});
export const addSnack = (severity: SnackType, children: React.ReactNode) => ({
  type: MainType.ADD_SNACK,
  children,
  severity
});
export const closeSnack = () => ({
  type: MainType.CLOSE_SNACK,
});

export const getCredits = () => ({
  type: MainType.GET_CREDITS
});
