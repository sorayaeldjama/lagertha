import { changeLinksPageFields } from "@/actions/links";
import { LinkOutput, LinkService, ListDto_for_LinkOutput, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { refreshToken } from "@/utils/refreshToken";
import { Lagertha } from "lagertha_js";

export const caseGetLinks = async (store: ReduxStore) => {
  const { loading } = store.getState().links;

  if (!loading) {
    store.dispatch(changeLinksPageFields({ loading: true }));
    try {
      await refreshToken()
      const config = await generateLagerthaConfig(
        process.env.NEXT_PUBLIC_LAGERTHA_API || ""
      );
      const token = localStorage.getItem("token_lagertha_transfer");
      if (!token) throw "no token";
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
      OpenAPI.TOKEN = token;
      const { page, items_per_page } = store.getState().links
      const links = await LinkService.linkControllerGetLinks(page, items_per_page) as ListDto_for_LinkOutput

      const all_links: Promise<LinkOutput>[] = [];
      for (const link of links.items as LinkOutput[]) {
        const link_promise = new Promise<LinkOutput>(async (resolve) => {
          let linkname_encrypted = link.name;
          const chunks = linkname_encrypted.split(',')
          if (chunks.length === 4 && /^[0-9abcdef]{128}$/.test(chunks[3])) {
            const linkname = await Lagertha.decrypt(linkname_encrypted, config);
            resolve({ ...link, name: linkname });
          }
          resolve(link)
        });
        all_links.push(link_promise);
      }
      const resolved = await Promise.all(all_links);


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
      store.dispatch(changeLinksPageFields({
        links: resolved,
        total_items: links.total_items,
        pages_to_display,
      }))
    } catch {

    }
    store.dispatch(changeLinksPageFields({ loading: false }));

  };
}