import { changeAdminsystemPageFields } from "@/actions/adminsystem";
import { changeAdminusersPageFields } from "@/actions/adminusers";
import {
  ListDto_for_UserOutput,
  OpenAPI,
  SystemInformationOutput,
  SystemService,
  UserService,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetSystemInfo = async (store: ReduxStore) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const {infos} = store.getState().adminSystem
    const res = await SystemService.systemControllerGetSysInfo() as SystemInformationOutput
    store.dispatch(changeAdminsystemPageFields({
        infos: [...infos, res]
    }))
    
  } catch {}
};
