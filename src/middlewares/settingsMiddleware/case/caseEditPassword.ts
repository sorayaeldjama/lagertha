import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { Jwt } from "@/types/jwt";
import { jwtDecode } from "jwt-decode";
import { OpenAPI } from "lagertha_js/dist/services/openapi";
import { refreshToken } from "@/utils/refreshToken";

export const caseEditPAssword = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");

        store.dispatch(changeSettingsPageFields({
            editPasswordLoader: true
        }))
        const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "");
        const uuid = process.env.NEXT_PUBLIC_LAGERTHA_UUID
        const env = process.env.NEXT_PUBLIC_LAGERTHA_API
        if(!token) throw 'no token'
        if (!env) throw 'no env'
        if (!uuid) throw 'no uuid'
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const {userJwt} = store.getState().main
        const {
            newPassword,
            oldPassword
        } = store.getState().settings;
        const login = (userJwt as Jwt).login
        const creds = await Lagertha.connect({
            login,
            password: oldPassword,
            application_uuid: uuid,
            env,
        })
        const decoded: Jwt = jwtDecode(creds.access_token)
        await Lagertha.reset_password(decoded.id, newPassword, config)
        store.dispatch(changeSettingsPageFields({
            editResult: 'success',
            newPassword: "",
            newConfirmPassword: "",
            oldPassword: ""
        }))
    } catch (error) {
        store.dispatch(changeSettingsPageFields({
            editResult: 'error'
        }))
    }
    store.dispatch(changeSettingsPageFields({
        editPasswordLoader: false
    }))
    
};


