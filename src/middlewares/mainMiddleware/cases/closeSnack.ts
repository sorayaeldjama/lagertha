import { changeMainPageFields } from "@/actions/main";
import { ReduxStore } from "@/types/ReduxStore";

export const caseCloseSnack = async (store: ReduxStore) => {
    try {
        store.dispatch(changeMainPageFields({snack: null}))
    } catch {

    }
}