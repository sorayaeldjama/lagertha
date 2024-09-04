import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { Jwt } from "@/types/jwt";
import { jwtDecode } from "jwt-decode";
import { OpenAPI, UserService } from "@/services/openapi";
import { refreshToken } from "@/utils/refreshToken";
import { changeMainPageFields, logout } from "@/actions/main";
import { changeAuthenticationPageFields } from "@/actions/authentication";

export const caseDeleteAccount = async (store: ReduxStore) => {
    try {
        await refreshToken()
        store.dispatch(changeSettingsPageFields({
            // editPasswordLoader: true
        }))
        const token = localStorage.getItem("token_lagertha_transfer");
        const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "");
        const uuid = process.env.NEXT_PUBLIC_LAGERTHA_UUID
        const env = process.env.NEXT_PUBLIC_LAGERTHA_API
        if (!token) throw "no token";

        if (!env) throw 'no env'
        if (!uuid) throw 'no uuid'
        const {userJwt} = store.getState().main
        const {
            deleteAccountPassword
        } = store.getState().settings;
        const login = (userJwt as Jwt).login
        const creds = await Lagertha.connect({
            login,
            password: deleteAccountPassword,
            application_uuid: uuid,
            env,
        })
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const decoded: Jwt = jwtDecode(creds.access_token)

        await UserService.userControllerDeleteUser()
        store.dispatch(changeSettingsPageFields({
           isDeleteAccountOpen :false,

        }))
        store.dispatch(changeMainPageFields({
            isLogged :false,
 
         }))       
         store.dispatch( logout())

    } catch (error) {
        store.dispatch(changeSettingsPageFields({
        }))
    }
    store.dispatch(changeSettingsPageFields({
        // editPasswordLoader: false
    }))
    
};


