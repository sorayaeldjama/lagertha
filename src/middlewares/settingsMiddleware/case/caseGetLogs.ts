import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeSettingsPageFields } from "@/actions/settings";
import { refreshToken } from "@/utils/refreshToken";
import { ListDto_for_DeviceSessionOutput, OpenAPI } from "lagertha_js/dist/services/openapi";
import { DeviceSessionService, ParameterOutput, ParameterService } from "@/services/openapi";
import { Theme_Color } from "@/enums/themeColor.enum";
import getParam from "@/utils/getParam";
import { ParameterType } from "@/enums/ParameterType.enum";
import { Language } from "@/enums/Language.enum";


export const caseGetLogs = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw 'noToken'
        store.dispatch(changeSettingsPageFields({
        }))
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const logs = await DeviceSessionService.deviceSessionControllerGetDeviceSession() as ListDto_for_DeviceSessionOutput;
        const deviceIp = logs.items.find(device => device.ip );

        store.dispatch(changeSettingsPageFields({
            logsList : logs as any 
        }))

    } catch (error) {
    }
    store.dispatch(changeSettingsPageFields({
    }))

};






