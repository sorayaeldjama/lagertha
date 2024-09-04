import { changeCslinksPageFields } from "@/actions/cslinks";
import { changeLinksPageFields } from "@/actions/links";
import { LinkService, ListDto_for_LinkCustomerSuccessOutput, ListDto_for_LinkOutput, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetLinks = async (store: ReduxStore) => {
  const { loading } = store.getState().links;

  if (!loading) {
    store.dispatch(changeCslinksPageFields({ loading: true }));
    try {
      await refreshToken()
      const token = localStorage.getItem("token_lagertha_transfer");
      if (!token) throw "no token";
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
      OpenAPI.TOKEN = token;
      const { page, items_per_page } = store.getState().csLinks
      const links = await LinkService.linkControllerGetLinksCustomerSuccess(page, items_per_page) as ListDto_for_LinkCustomerSuccessOutput
      const pages_to_display = []
      const max_page = (links.total_items / items_per_page)
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
      store.dispatch(changeCslinksPageFields({
        links: links.items,
        total_items: links.total_items,
        pages_to_display,
      }))
    } catch {

    }
    store.dispatch(changeCslinksPageFields({ loading: false }));

  };
}