import { changeAuthenticationPageFields, submitLogInForm } from "@/actions/authentication";
import { changeForgetPageFields } from "@/actions/forget";
import { ForgetStep } from "@/enums/forgetStep.enum";
import { OpenAPI, UserReinitToken, UserService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { Lagertha } from "lagertha_js";

export const caseReinitPassword = async (store: ReduxStore) => {
  try {
    const { reset_token, newPassword, login, is_otp_need, otp_code } =
      store.getState().forget;
    store.dispatch(
      changeForgetPageFields({
        loaderStart: true,
      })
    );
    const _ = await Lagertha.reinit_password(
      reset_token,
      newPassword,
      process.env.NEXT_PUBLIC_LAGERTHA_API || "",
      is_otp_need ? otp_code : undefined
    );
    if (is_otp_need) {
      store.dispatch(
        changeForgetPageFields({
          is_otp_need: false,
          otp_code: ""
        })
      );
      store.dispatch(changeAuthenticationPageFields({
        totp_code: otp_code,
        is_otp_need: true
      }))
    }
    store.dispatch(submitLogInForm(login, newPassword));
  } catch (e: any) {
    if (e.status === 423) {
      store.dispatch(
        changeForgetPageFields({
          is_otp_need: true,
        })
      );
    }
  }
  store.dispatch(
    changeForgetPageFields({
      loaderStart: false,
    })
  );
};
