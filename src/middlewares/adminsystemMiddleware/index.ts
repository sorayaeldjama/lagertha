import { AdminsystemType } from "@/actions/adminsystem";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseGetSystemInfo } from "./case/caseGetSystemInfo";

const adminsystemMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case AdminsystemType.GET_ADMIN_SYSTEM_INFO:
        await caseGetSystemInfo(store)
        break
      default:
        next(action);
    }
  };

export default adminsystemMiddleware;
