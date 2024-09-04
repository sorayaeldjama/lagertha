import { ReduxStore } from "@/types/ReduxStore";
import { changeSettingsPageFields, getParams } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";
import { ParameterOutput, ParameterService, ParameterUpdateInput } from "@/services/openapi";
import { Theme_Color } from "@/enums/themeColor.enum";
import { ParameterType } from "@/enums/ParameterType.enum";
export const casePutParams = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const { lightMode } = store.getState().settings

        const body = {
            name: ParameterType.THEME_COLOR,
            value: lightMode,
        } as ParameterUpdateInput;

        await ParameterService.parameterControlerUpdateParameter(body) as ParameterOutput;

        store.dispatch(getParams())

    } catch (error) {

    }
    store.dispatch(changeSettingsPageFields({
    }))

};



