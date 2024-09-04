import { changeMainPageFields, logUser } from "@/actions/main";
import { changeSignupPageFields } from "@/actions/signup";
import { Lagertha, LagerthaTypes } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { AuthService, OpenAPI } from "@/services/openapi";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { CredentialOutputTransfer } from "@/types/credentials";
import { changeAuthenticationPageFields } from "@/actions/authentication";
import { AxiosError } from "axios";

export const caseSubmitLogInForm = async (store: ReduxStore, action: any) => {
  try {
    const {is_otp_need, totp_code} = store.getState().authentication
    store.dispatch(changeMainPageFields({ loadingLoginForm: true }));
    store.dispatch(
      changeSignupPageFields({
        loading: true,
      })
    );
    const connectObject: any = {
      login: action.login,
      password: action.password,
      application_uuid: process.env.NEXT_PUBLIC_LAGERTHA_UUID || "",
      env: process.env.NEXT_PUBLIC_LAGERTHA_API || "",
    }
    if (is_otp_need) {
      connectObject.code_2fa = totp_code
    }
    // envoyer vers login LAGERTHA
    const creds = await Lagertha.connect(connectObject);
    const fingerprint = await get_fingerprint();
    // connexion api TRANSFER
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    const credsLogin = (await AuthService.authControllerLogin({
      open_id: creds.open_id,
      fingerprint,
    })) as CredentialOutputTransfer;
    store.dispatch(
      changeAuthenticationPageFields({
        is_otp_need: false,
        totp_code: "",
      })
    );
    store.dispatch(logUser(creds, credsLogin));
  } catch (e: any) {
    if (e.status === 423) {
      store.dispatch(
        changeAuthenticationPageFields({
          is_otp_need: true,
        })
      );
    }
  }
  store.dispatch(
    changeSignupPageFields({
      loading: false,
    })
  );
  store.dispatch(
    changeAuthenticationPageFields({
      loadingLoginForm: false,
    })
  );
};
