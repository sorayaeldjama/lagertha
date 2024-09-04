import { changeAdminusersPageFields } from "@/actions/adminusers";
import {
  ListDto_for_UserOutput,
  OpenAPI,
  UserService,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseChangeUsersRoles = async (store: ReduxStore, action: any) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const res = await UserService.userControllerEditRoles(action.user_id, {
      roles: action.roles,
    });
    const {users} = store.getState().adminUsers
    const updated_users = users.map((user) => {
        if (user.id === action.user_id) {
            return {...user, roles: action.roles}
        }
        return user
    })
    store.dispatch(changeAdminusersPageFields({
        userModal: null,
        users: updated_users
    }))
  } catch {}
};
