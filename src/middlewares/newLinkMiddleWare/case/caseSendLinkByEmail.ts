import { ReduxStore } from "@/types/ReduxStore";
import { LinkOutput, LinkSendInput, LinkService, OpenAPI } from "@/services/openapi";
import { changeNewLinkPageFields } from "@/actions/newLink";
import { refreshToken } from "@/utils/refreshToken";
import { SnackType } from "@/enums/snackType.enum";
import { addSnack } from "@/actions/main";


export const caseSendNewLinkByEmail = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;

        store.dispatch(
            changeNewLinkPageFields({
                // showLoader: true,
                // isLinkEmailOpen: false,
            }))
        const { emails, snackCreateNewLinkSucces } = store.getState().newLink
        if (!token) throw "no token";

        const body: LinkSendInput = {
            emails,
            is_sender: true
        }

        const { link_id } = store.getState().newLink
        if (!link_id) throw 'no link'
        await LinkService.linkControllerSendLink(link_id, body) as LinkOutput
        store.dispatch(
            changeNewLinkPageFields({
                isSendByEmailOpen: false,
                isLinkSended: true,
            }))
        setTimeout(() => {
            store.dispatch(
                changeNewLinkPageFields({
                    emailSendLink: "",
                    emailError: false,
                    isLinkSended: true,
                    // isLinkPasswordOpen: true,
                    // isLinkEmailOpen: false,
                    // showLoader: false
                }))
        }, 1000)

        store.dispatch(
            addSnack(SnackType.SUCCESS, snackCreateNewLinkSucces));
        // t('Middlewares_New_Link_Send_Link_Snack_Success'))
    } catch {
        const { snackCreateNewLinkError
        } = store.getState().newLink
        store.dispatch(
            changeNewLinkPageFields({
                // showLoader: false,
                emailError: true,
                isLinkSended: false,
            }))
        store.dispatch(addSnack(SnackType.ERROR, snackCreateNewLinkError))
        //  t('Middlewares_New_Link_Send_Link_Snack_Error')));
    }
};
