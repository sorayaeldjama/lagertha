import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";

export const caseApplyMfa = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        const { totp, is_2fa } = store.getState().settings
        store.dispatch(changeSettingsPageFields({
            mfa_loading: true
        }))
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "");
        await Lagertha.edit_user_2fa(true, totp, config);

        store.dispatch(changeSettingsPageFields({
            is_2fa: true,
            otp_code: null,
            // totp: "",
            switchChecked: true,
            isEnableMfaOpen: false,
        }))
    } catch (error) {

    }
    store.dispatch(changeSettingsPageFields({
        mfa_loading: false
    }))

};






