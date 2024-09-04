import { SettingsType } from "@/actions/settings";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseEditPAssword } from "./case/caseEditPassword";
import { caseApplyMfa } from "./case/caseApplyMfa";
import { caseDisableMfa } from "./case/caseDisableMfa";
import { caseDeleteAccount } from "./case/caseDeleteAccount";
import { caseGetParams } from "./case/caseGetParams";
import { casePutParams } from "./case/casePutParams ";
import { caseGetParamsLanguage } from "./case/caseGetParamsLanguage";
import { casePutParamsLanguage } from "./case/casePutParamsLanguage";
import { caseGetLogs } from "./case/caseGetLogs";

const settingsMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case SettingsType.APPLY_MFA:
        caseApplyMfa(store)
        break
      case SettingsType.EDIT_PASSWORD:
        caseEditPAssword(store)
        break
      case SettingsType.DISABLE_MFA:
        caseDisableMfa(store)
        break
      case SettingsType.DELETE_ACCOUNT:
        caseDeleteAccount(store)
        break
      case SettingsType.GET_PARAMS:
        caseGetParams(store)
        break
      case SettingsType.PUT_PARAMS:
        casePutParams(store)
        break
      case SettingsType.GET_PARAMS_LANGUAGE:
        caseGetParamsLanguage(store)
        break
      case SettingsType.PUT_PARAMS_LANGUAGE:
        casePutParamsLanguage(store)
        break
        case SettingsType.GET_LOGS:
          caseGetLogs(store)
          break
        
      default:
        next(action);
    }
  };

export default settingsMiddleware;
