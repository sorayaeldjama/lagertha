import { changeMainPageFields } from "@/actions/main";
import { ReduxStore } from "@/types/ReduxStore";
import { AnyAction } from "redux";

export const caseAddSnack = async (store:ReduxStore, action: AnyAction) => {
    try {
        store.dispatch(changeMainPageFields({
            snack: {
                type: action.severity,
                children: action.children
            }
        }))
    } catch {

    }
}