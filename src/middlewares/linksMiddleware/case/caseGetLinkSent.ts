
import { changeLinksPageFields } from "@/actions/links";
import { LinkService, ListDto_for_LinkSendOutput, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetlinkSent = async (store: ReduxStore) => {

    try {
        await refreshToken()
        const { currentLink } = store.getState().links
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        if (!currentLink?.uuid) throw "no link"
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const sent = await LinkService.linkControllerGetLinkSent(currentLink.uuid, 1, 100) as ListDto_for_LinkSendOutput
        store.dispatch(changeLinksPageFields({
            links_sent: sent.items
        }))
            
    } catch (error) {
        console.log(error)

    }
};
