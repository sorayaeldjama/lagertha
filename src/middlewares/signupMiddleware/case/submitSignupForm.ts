import { changeSignupPageFields } from "@/actions/signup";
import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { submitLogInForm } from "@/actions/authentication";
import { AuthService, OpenAPI } from "@/services/openapi";
import { addSnack, changeMainPageFields, logUser } from "@/actions/main";
import { AxiosError } from "axios";
import { SnackType } from "@/enums/snackType.enum";
import { SignupStepEnum } from "@/enums/signupStep.enum";
import { UserService } from "lagertha_js/dist/services/openapi";

export const caseSubmitSignupForm = async (store: ReduxStore) => {
  try {
    store.dispatch(
      changeSignupPageFields({
        loading: true,
      })
    );
    console.log(" je suis sur le middlwware de signup");
    const { loading } = store.getState().signup;
    OpenAPI.BASE = process.env.NEXT_PUBLIC_BLOG_HISTOIRE || "";
    console.log(" je suis sur le middlwware de signup 2");

    const {
      signupLogin,
      signupEmail,
      signupFirstname,
      signupLastname,
      signupPassword,
      signupConfirmPassword
    } = store.getState().signup;
    console.log(" je suis sur le middlwware de signup 2 signupLogin",signupLogin);

    const res = await UserService.userControllerPostUser(
      {
        email: signupEmail,
        password: signupPassword,
        firstName: signupFirstname,
        lastName: signupLastname,
        login: signupLogin,
        // roles: Array<string>;
      }
      // process.env.NEXT_PUBLIC_BLOG_HISTOIRE || ""}
    );

    store.dispatch(submitLogInForm(signupEmail, signupPassword));
    // store.dispatch(
    //   changeSignupPageFields({
    //     loading: false,
    //     signupEmail: "",
    //     signupFirstname: "",
    //     signupPassword: "",
    //     signupConfirmPassword: "",
    //     signupLastname: "",
    //     isUserEmailAlreadyExit: false,
    //   })
    // );
    store.dispatch(
      changeMainPageFields({
        isLogged: true,
      })
    );
  } catch (e) {
    console.log(e);
    if ((JSON.parse(e as string) as AxiosError)?.code === "409") {

    }
    // store.dispatch(
    //   addSnack(SnackType.ERROR, "An error occur il existe deja")
    // );
    store.dispatch(
      changeSignupPageFields({
        loading: false,
        isSignupDetailsOpen: true,
        isSignupPasswordOpen: false,
        currentStep: SignupStepEnum.USER_DETAILS,
        isSignUpError: true,
        isUserEmailAlreadyExit: true,
      })
    );
  }
};
