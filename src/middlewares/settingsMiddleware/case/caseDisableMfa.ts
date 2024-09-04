import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";

export const caseDisableMfa = async (store: ReduxStore) => {
    try {
        await refreshToken()

        const token = localStorage.getItem("token_lagertha_transfer");

        const { totpDisable } = store.getState().settings
        store.dispatch(changeSettingsPageFields({
            mfa_loading: true
        }))
        if(! token) throw 'no token'
        const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "");
        await Lagertha.edit_user_2fa(false, totpDisable, config);
        store.dispatch(changeSettingsPageFields({
            is_2fa: false,
            otp_code: null,
            totp: "",
            isDisableMfaOpen:false,
            isMfaActive:false,
            totpDisable:"",
            isEnableMfaOpen:true

        }))

    } catch (error) {

    }
    store.dispatch(changeSettingsPageFields({
        mfa_loading: false
    }))

};
