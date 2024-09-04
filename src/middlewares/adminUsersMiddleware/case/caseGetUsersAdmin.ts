import { changeAdminusersPageFields } from "@/actions/adminusers";
import {  ListDto_for_UserOutput, OpenAPI, UserService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetUsersAdmin = async (store: ReduxStore) => {
  const { loading } = store.getState().adminUsers;

  if (!loading) {
    store.dispatch(changeAdminusersPageFields({ loading: true }));
    try {
      await refreshToken()
      const token = localStorage.getItem("token_lagertha_transfer");
      if (!token) throw "no token";
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
      OpenAPI.TOKEN = token;
      const { page, items_per_page } = store.getState().csLinks
      const users = await UserService.userControllerGetUsers(items_per_page, page) as ListDto_for_UserOutput
      const pages_to_display = []
      const max_page = (users.total_items / items_per_page)
      pages_to_display.push("1")
      if (max_page > 1) {
        pages_to_display.push("2")
      }
      if (max_page > 2) {
        pages_to_display.push("3")
      }
      if (max_page > 6) {
        pages_to_display.push('...')
      }
      if (max_page > 3) {
        pages_to_display.push("4")
      }
      if (max_page > 4) {
        pages_to_display.push("5")
      }
      if (max_page > 5) {
        pages_to_display.push("6")
      }
      store.dispatch(changeAdminusersPageFields({
        users: users.items,
        total_items: users.total_items,
        pages_to_display,
      }))
    } catch {

    }
    store.dispatch(changeAdminusersPageFields({ loading: false }));

  };
}