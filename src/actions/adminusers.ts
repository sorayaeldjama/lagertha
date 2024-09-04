import { AdminusersState } from "@/reducers/adminusersReducer";
import { Role } from "@/enums/roles.enum";

export enum AdminusersType {
  CHANGE_ADMINUSERSPAGE_FIELDS = "CHANGE_ADMINUSERSPAGE_FIELDS",
  GET_USERS_ADMIN = "GET_USERS_ADMIN",
  CHANGE_USER_ROLES = "CHANGE_USER_ROLES",
}

export const changeAdminusersPageFields = (
  payload: Partial<AdminusersState>
) => ({
  type: AdminusersType.CHANGE_ADMINUSERSPAGE_FIELDS,
  payload,
});

export const getUsersAdmin = () => ({
  type: AdminusersType.GET_USERS_ADMIN,
});

export const changeUserRoles = (user_id: string, roles: Role[]) => ({
  type: AdminusersType.CHANGE_USER_ROLES,
  user_id,
  roles,
});
