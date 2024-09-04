import { ForgetType } from "@/actions/forget";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseGetResetCode } from "./case/caseGetResetCode";
import { caseValidateCode } from "./case/caseValidateCode";
import { caseReinitPassword } from "./case/caseReinitPassword";

const forgetMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case ForgetType.REINIT_PASSWORD:
        caseReinitPassword(store)
        break
      case ForgetType.VALIDATE_CODE:
        caseValidateCode(store)
        break
      case ForgetType.GET_RESET_CODE:
        caseGetResetCode(store)
        break
      default:
        next(action);
    }
  };

export default forgetMiddleware;
