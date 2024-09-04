import { SettingsType } from '@/actions/settings';
import { Theme_Color } from '@/enums/themeColor.enum';
import { ErrorObject, ListDto_for_DeviceSessionOutput, ParameterOutput } from '@/services/openapi';

export type SettingsState = {
  newPassword: string;
  newConfirmPassword: string;
  oldPassword: string,
  editPasswordLoader: boolean;
  editResult: 'success' | 'error' | null;
  is_2fa: boolean;
  otp_code: null | string;
  totp: string;
  mfa_loading: boolean;
  totpDisable: string;
  switchChecked: boolean;
  isEnableMfaOpen: boolean;
  isDisableMfaOpen: boolean;
  isMfaActive: boolean;
  isEditPasswordOpen: boolean;
  isDeleteAccountOpen: boolean;
  deleteAccountPassword: string;
  settingsParams: ParameterOutput[];
  selectedThemeColor: string,
  lightMode: Theme_Color | null;
  themeMode: string;
  lightModeSelected: boolean;
  savedMode: string;
  currentLanguage:string | null ; 
  logsList : ListDto_for_DeviceSessionOutput  | null ; 
  selectedLogo: File | null;

}

const initialState: SettingsState = {
  newPassword: "",
  newConfirmPassword: "",
  oldPassword: "",
  editPasswordLoader: false,
  editResult: null,
  is_2fa: false,
  otp_code: null,
  totp: "",
  mfa_loading: false,
  totpDisable: "",
  switchChecked: false,
  isEnableMfaOpen: false,
  isDisableMfaOpen: false,
  isMfaActive: false,
  isEditPasswordOpen: false,
  isDeleteAccountOpen: false,
  deleteAccountPassword: "",
  settingsParams: [],
  selectedThemeColor: "",
  lightMode: null,
  themeMode: " ",
  lightModeSelected: false,
  savedMode: "",
  currentLanguage:"",
  logsList:null,
  selectedLogo: null
};

const settingsReducer = (state: SettingsState = initialState, action: any = {}) => {
  switch (action.type) {
    case SettingsType.CHANGE_SETTINGSPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      } as SettingsState
    default:
      return state;
  }
};

export default settingsReducer;
