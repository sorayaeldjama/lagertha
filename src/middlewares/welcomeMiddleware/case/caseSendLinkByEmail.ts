import { ReduxStore } from "@/types/ReduxStore";
import { changeWelcomePageFields } from "@/actions/welcome";
import { LinkOutput, LinkSendInput, LinkService, OpenAPI } from "@/services/openapi";
import { refreshToken } from "@/utils/refreshToken";

export const caseSendLinkByEmail = async (store: ReduxStore) => {
    try {

        store.dispatch(
            changeWelcomePageFields({
                showLoader: true,
                isLinkEmailOpen: false,

            }))
        const { emailSendLink, isLinkPasswordOpen } = store.getState().welcome
        const token = sessionStorage.getItem("tranfer_token");
        if (!token) throw "no token";
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const body: LinkSendInput = {
            emails: [emailSendLink],
            is_sender: true
        }

        const { link_id } = store.getState().welcome
        if (!link_id) throw 'no link'
        await LinkService.linkControllerSendLink(link_id, body) as LinkOutput
        store.dispatch(
            changeWelcomePageFields({
                isLinkEmailOpen: false,
            }))
        setTimeout(() => {
            store.dispatch(
                changeWelcomePageFields({
                    emailSendLink: "",
                    isLinkPasswordOpen: true,
                    isLinkEmailOpen: false,
                    showLoader: false
                }))
        }, 1000)
    } catch {
        store.dispatch(
            changeWelcomePageFields({
                showLoader: false,
                emailError: true,
            }))
    }
};
