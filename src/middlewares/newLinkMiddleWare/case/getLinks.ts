import { changeSignupPageFields } from "@/actions/signup";
import { ReduxStore } from "@/types/ReduxStore";
import { changeNewLinkPageFields } from "@/actions/newLink";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { refreshToken } from "@/utils/refreshToken";
import { OpenAPI } from "lagertha_js/dist/services/openapi";

export const caseGetLinks = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;
        const {
            selectedFile,
        } = store.getState().newLink;
        if (!selectedFile) throw 'no file'
        const size = selectedFile.size;
        const name = selectedFile.name;
        store.dispatch(
            changeNewLinkPageFields({
                fileName: name,
                fileSize: size.toString(),
            }));

    } catch (error) {

    }
    store.dispatch(
        changeSignupPageFields({
            loading: true,
        })
    );
};


