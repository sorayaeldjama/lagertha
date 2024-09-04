import { SettingsState } from "@/reducers/settingsReducer";
import { ParameterUpdateInput } from "@/services/openapi";

export enum SettingsType {
  CHANGE_SETTINGSPAGE_FIELDS = 'CHANGE_SETTINGSPAGE_FIELDS',
  EDIT_PASSWORD = 'EDIT_PASSWORD',
  GET_OTP_CODE = 'GET_OTP_CODE',
  APPLY_MFA = 'APPLY_MFA',
  DISABLE_MFA = 'DISABLE_MFA',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  GET_PARAMS = 'GET_PARAMS',
  PUT_PARAMS = 'PUT_PARAMS',
  GET_PARAMS_LANGUAGE = "GET_PARAMS_LANGUAGE",
  PUT_PARAMS_LANGUAGE = "PUT_PARAMS_LANGUAGE",
  GET_LOGS = "GET_LOGS"
}

export const changeSettingsPageFields = (payload: Partial<SettingsState>) => ({
  type: SettingsType.CHANGE_SETTINGSPAGE_FIELDS,
  payload,
});
export const editPassword = () => ({
  type: SettingsType.EDIT_PASSWORD
})
export const getOtpCode = () => ({
  type: SettingsType.GET_OTP_CODE
})
export const applyMfa = () => ({
  type: SettingsType.APPLY_MFA
})
export const disableMfa = () => ({
  type: SettingsType.DISABLE_MFA
})
export const deleteAccount = () => ({
  type: SettingsType.DELETE_ACCOUNT
})
export const getParams = () => ({
  type: SettingsType.GET_PARAMS
})
export const putParams = () => ({
  type: SettingsType.PUT_PARAMS,
})
export const getParamsLanguage = () => ({
  type: SettingsType.GET_PARAMS_LANGUAGE
})
export const putParamsLanguage = () => ({
  type: SettingsType.PUT_PARAMS_LANGUAGE,
});
export const getLogs = () => ({
  type: SettingsType.GET_LOGS,
});