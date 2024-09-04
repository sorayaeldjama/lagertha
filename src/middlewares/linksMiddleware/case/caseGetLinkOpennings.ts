
import { changeLinksPageFields } from "@/actions/links";
import { LinkService, ListDto_for_LinkOpenningOutput, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetlinkOpenning = async (store: ReduxStore) => {

    try {
        await refreshToken()
        const { currentLink } = store.getState().links
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        if (!currentLink?.uuid) throw "no link"
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const opennings = await LinkService.linkControllerGetLinkOpennings(currentLink.uuid, 1, 100) as ListDto_for_LinkOpenningOutput
        store.dispatch(changeLinksPageFields({
            opennings: opennings.items
        }))
            
    } catch (error) {
        console.log(error)

    }
};
