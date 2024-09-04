import { changeMainPageFields, logUser } from "@/actions/main";
import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { isValidToken } from "@/utils/isValidToken";
import { jwtDecode } from "jwt-decode";
import { AnyAction } from "redux";
import { AuthService, OpenAPI } from "@/services/openapi";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { changeTransferHomePageFields } from "@/actions/transferHome";
import { changeAuthenticationPageFields } from "@/actions/authentication";
import { Jwt } from "@/types/jwt";
import { changeSettingsPageFields } from "@/actions/settings";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { CredentialOutputTransfer } from "@/types/credentials";

export const caseCheckIsLogged = async (
  store: ReduxStore,
  action: AnyAction
) => {
  try {
    store.dispatch(changeMainPageFields({ securityLoader: true }));
    const token_lagertha = localStorage.getItem("token_lagertha");
    const refresh_token = localStorage.getItem("refresh_token_lagertha");
    const token_lagertha_transfer = localStorage.getItem(
      "token_lagertha_transfer"
    );
    const refresh_token_lagertha_transfer = localStorage.getItem(
      "refresh_token_lagertha_transfer"
    );
    if (
      !token_lagertha ||
      !token_lagertha_transfer ||
      !refresh_token ||
      !refresh_token_lagertha_transfer
    )
      throw "no token";

    if (
      isValidToken(refresh_token)
    ) {
      const decode_lagertha: any = jwtDecode(refresh_token);
      const creds_lagertha = await Lagertha.refresh({
        refresh_token,
        application_uuid: decode_lagertha.application_uuid,
        env: process.env.NEXT_PUBLIC_LAGERTHA_API || "",
      });

      // const decoded: Jwt = jwtDecode(creds_lagertha.access_token);
      // const is_otp = decoded.is_2fa_activate
      // store.dispatch(changeSettingsPageFields({
      //   is_2fa: is_otp
      // }))
      // if (!is_otp) {
      //   const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "")
      //   const { code } = await Lagertha.get_otp_code(config)
      //   const url = `otpauth://totp/Lagertha?secret=${code}&algorithm=SHA1&digits=6&period=30`
      //   store.dispatch(changeSettingsPageFields({
      //     otp_code: url
      //   }))
      // }

      const fingerprint = await get_fingerprint();
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";

      const creds_lagertha_transfer = (await AuthService.authControllerLogin({
        open_id: creds_lagertha.open_id,
        fingerprint,
      })) as CredentialOutputTransfer;
      store.dispatch(logUser(creds_lagertha, creds_lagertha_transfer));
      store.dispatch(
        changeAuthenticationPageFields({ isLoginFormOpen: false })
      );
    }
  } catch {
    store.dispatch(changeMainPageFields({ securityLoader: false }));
  }
};
