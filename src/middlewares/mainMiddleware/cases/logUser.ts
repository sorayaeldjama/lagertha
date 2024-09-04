import { changeAuthenticationPageFields } from "@/actions/authentication";
import { changeMainPageFields, getCredits } from "@/actions/main";
import { changeSettingsPageFields, getParams } from "@/actions/settings";
import { changeSignupPageFields } from "@/actions/signup";
import { changeTransferHomePageFields } from "@/actions/transferHome";
import { ReduxStore } from "@/types/ReduxStore";
import { Jwt } from "@/types/jwt";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { jwtDecode } from "jwt-decode";
import { Lagertha } from "lagertha_js";
import { AnyAction } from "redux";

export const caseLogUser = async (store: ReduxStore, action: AnyAction) => {
  try {
    const {
      access_token: access_token_lagertha_transfer,
      refresh_token: refresh_token_lagertha_transfer
    } = action.credsLogin;
    const cres = action.creds;
    const {
      access_token,
      refresh_token,
      pk_lagertha
    } = action.creds;

    const decoded_lagertha: Jwt = jwtDecode(access_token);
    const decoded_lagertha_transfer: Jwt = jwtDecode(access_token_lagertha_transfer);
    const login = decoded_lagertha_transfer.login;
    const email = decoded_lagertha_transfer.email;
    localStorage.setItem("token_lagertha", access_token);
    localStorage.setItem("refresh_token_lagertha", refresh_token);
    localStorage.setItem("pk_lagertha", pk_lagertha);
    localStorage.setItem("token_lagertha_transfer", access_token_lagertha_transfer);
    localStorage.setItem("refresh_token_lagertha_transfer", refresh_token_lagertha_transfer);

    const is_otp = decoded_lagertha.is_2fa_activate
    store.dispatch(changeSettingsPageFields({
      is_2fa: is_otp
    }))
    if (!is_otp) {
      const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "")
      const {code} = await Lagertha.get_otp_code(config)
      const url = `otpauth://totp/Lagertha?secret=${code}&algorithm=SHA1&digits=6&period=30`
      store.dispatch(changeSettingsPageFields({
        otp_code: url
      }))
    }
    store.dispatch(getParams())
    store.dispatch(getCredits())
    store.dispatch(changeMainPageFields({
      isLogged: true,
      roles: decoded_lagertha_transfer.roles,
      isSideBarOpen: false,
      userJwt: decoded_lagertha_transfer
    }));
    store.dispatch(changeSignupPageFields({
      loading: false,
    }));
    store.dispatch(changeTransferHomePageFields({
      isTransferHomeOpen: true,
    }));
    store.dispatch(changeAuthenticationPageFields({
      loadingLoginForm: false,
      isLoginFormOpen: false,
      logInLogin: login,
      loginEmail: email
    })
    );
  } catch {
  }
  store.dispatch(changeMainPageFields({ securityLoader: false }));
};
