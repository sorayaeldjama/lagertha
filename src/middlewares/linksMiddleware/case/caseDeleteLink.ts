import { changeLinksPageFields } from "@/actions/links";
import { get_links } from "@/actions/links";
import { addSnack } from "@/actions/main";
import { SnackType } from "@/enums/snackType.enum";
import { LinkService, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";


export const caseDeleteLink = async (store: ReduxStore) => {
    
    try {
        await refreshToken()
        const { linkUuid ,deleteLinkSnackSuccess} = store.getState().links
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        if (!linkUuid) throw "no link"
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;


        await LinkService.linkControllerDeleteLink(linkUuid)

        store.dispatch(get_links())
        store.dispatch(changeLinksPageFields({
            isConfirmDeleteLink: false,
            isDeleted: true,
            isSnackOpen:true
        }))
        store.dispatch(
            addSnack(SnackType.SUCCESS, deleteLinkSnackSuccess))
            
    } catch (error) {
        const { deleteLinkSnakError} = store.getState().links

        store.dispatch(changeLinksPageFields({
            isConfirmDeleteLink: false,
            isDeleted: false,
            isSnackOpen:true

        }))
        store.dispatch(addSnack(SnackType.ERROR, deleteLinkSnakError))
    }
};
