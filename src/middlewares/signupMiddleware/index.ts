import { SignupType } from "@/actions/signup";
import { RootState } from "@/store";
  import { Middleware } from "redux";
import { caseSubmitSignupForm } from "./case/submitSignupForm";

  const signupMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
    switch (action.type) {
      case SignupType.SUBMIT_SIGNUP_FORM: {
        caseSubmitSignupForm(store)
        break
      }
      default:
        next(action);
    }
  };
  
  export default signupMiddleware;
  