import { SignupType } from "@/actions/signup";
import { RootState } from "@/store";
  import { Middleware } from "redux";
import { caseSubmitLogInForm } from "./case/submitLogInForm";
import { AuthenticationType } from "@/actions/authentication";

  const loginMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
    switch (action.type) {
      case AuthenticationType.SUBMIT_LOGIN_FORM: {
        caseSubmitLogInForm(store, action)
        break
      }
      default:
        next(action);
    }
  };
  
  export default loginMiddleware;
  