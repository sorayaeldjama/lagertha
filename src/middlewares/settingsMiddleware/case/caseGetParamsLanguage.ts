import { ReduxStore } from "@/types/ReduxStore";
import { changeSettingsPageFields } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";
import { ParameterOutput, ParameterService } from "@/services/openapi";
import getParam from "@/utils/getParam";
import { ParameterType } from "@/enums/ParameterType.enum";
import { Language } from "@/enums/Language.enum";

export const caseGetParamsLanguage = async (store: ReduxStore) => {
    try {
        
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        store.dispatch(changeSettingsPageFields({
        }))
        const { isLogged } = store.getState().main

        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        localStorage.getItem('locale')
        const navigatorLocale = navigator.language
        const params = await ParameterService.parameterControlerGetParameters() as ParameterOutput[];

        const language = getParam<Language>(params, ParameterType.LANGUAGE, Language.EN)
        localStorage.setItem('locale', language as string)

        if (!language) throw "no language param"
        localStorage.setItem('locale', language)
        if (isLogged) {
            const currentLanguageLocal = localStorage.getItem('locale')

            store.dispatch(changeSettingsPageFields({
                settingsParams: params,
                currentLanguage: currentLanguageLocal
            }))
        } else {
            const navigatorLocale = navigator.language

            store.dispatch(changeSettingsPageFields({
                settingsParams: params,
                currentLanguage: navigatorLocale
            }))
        }

    } catch (error) {
    }
    store.dispatch(changeSettingsPageFields({
    }))

};






