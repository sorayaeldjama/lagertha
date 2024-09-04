import { changeCsstatsPageFields } from "@/actions/csstats";
import { DailyAnalyticOutput, DailyAnalyticService, FileService, LinkService, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetDailyAnalytics = async (store: ReduxStore) => {
    try {
        await refreshToken()
    
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";

        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const dailies = await DailyAnalyticService.dailyAnalyticControlerGetDailyAnalytics() as DailyAnalyticOutput[];
        
        store.dispatch(changeCsstatsPageFields({
            dailies: dailies,
        }))

    } catch (error) {
    }
};
