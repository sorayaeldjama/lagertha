import { changeMainPageFields } from "@/actions/main";
import { ReduxStore } from "@/types/ReduxStore";

export const caseLogout = async (store: ReduxStore) => {
    localStorage.removeItem("pk_lagertha")
    localStorage.removeItem("refresh_token_lagertha")
    localStorage.removeItem("refresh_token_lagertha_transfer")
    localStorage.removeItem("token_lagertha")
    localStorage.removeItem("token_lagertha_transfer")
    sessionStorage.clear()
    store.dispatch(changeMainPageFields({isLogged: false}))
  
}