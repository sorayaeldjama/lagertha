import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";
import { ParameterOutput, ParameterService } from "@/services/openapi";
import { Theme_Color } from "@/enums/themeColor.enum";
import getParam from "@/utils/getParam";
import { ParameterType } from "@/enums/ParameterType.enum";
import { Language } from "@/enums/Language.enum";

export const caseGetParams = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        store.dispatch(changeSettingsPageFields({
        }))
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const params = await ParameterService.parameterControlerGetParameters() as ParameterOutput[];

        const theme = getParam<Theme_Color>(params, ParameterType.THEME_COLOR, Theme_Color.DEFAULT)
        // const language = getParam<Language>(params, ParameterType.LANGUAGE, Language.EN) 

        if (!theme) throw "no color param"
        localStorage.setItem('color_theme', theme)
        store.dispatch(changeSettingsPageFields({
            settingsParams: params,
            lightMode: theme
        }))

    } catch (error) {
    }
    store.dispatch(changeSettingsPageFields({
    }))

};
