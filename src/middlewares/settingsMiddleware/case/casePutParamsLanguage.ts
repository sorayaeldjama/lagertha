import { ReduxStore } from "@/types/ReduxStore";
import { changeSettingsPageFields, getParams, getParamsLanguage } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";
import { ParameterOutput, ParameterService, ParameterUpdateInput } from "@/services/openapi";
import { Theme_Color } from "@/enums/themeColor.enum";
import { ParameterType } from "@/enums/ParameterType.enum";
export const casePutParamsLanguage = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const { currentLanguage } = store.getState().settings
        
        const body = {
            name: ParameterType.LANGUAGE,
            value: currentLanguage,
        } as ParameterUpdateInput;

        await ParameterService.parameterControlerUpdateParameter(body) as ParameterOutput;
        store.dispatch(getParamsLanguage())
        localStorage.setItem('locale', currentLanguage as string)

    } catch (error) {

    }
    store.dispatch(changeSettingsPageFields({
    }))

};






