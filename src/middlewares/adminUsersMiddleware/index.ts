import { AdminusersType } from "@/actions/adminusers";
import { RootState } from "@/store";
  import { Middleware } from "redux";
import { caseGetUsersAdmin } from "./case/caseGetUsersAdmin";
import { caseChangeUsersRoles } from "./case/caseChangeUsersRoles";

  const adminusersMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
    switch (action.type) {
      case AdminusersType.CHANGE_USER_ROLES:
        await caseChangeUsersRoles(store, action)
        break
      case AdminusersType.GET_USERS_ADMIN:
        await caseGetUsersAdmin(store)
        break
      default:
        next(action);
    }
  };
  
  export default adminusersMiddleware;
  