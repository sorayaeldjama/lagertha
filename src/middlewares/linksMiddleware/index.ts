import { LinksType } from "@/actions/links";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseGetLinks } from "./case/caseGetLinks";
import { caseDeleteLink } from "./case/caseDeleteLink";
import { caseGetlinkOpenning } from "./case/caseGetLinkOpennings";
import { LinkType } from "@/actions/link";
import { caseGetlinkSent } from "./case/caseGetLinkSent";

const linksMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
  switch (action.type) {
    case LinksType.GET_LINK_SENT: 
      await caseGetlinkSent(store)
      break
    case LinksType.GET_LINK_OPENNING:
      await caseGetlinkOpenning(store)
      break
    case LinksType.GET_LINKS:
      caseGetLinks(store)
      break
    case LinksType.DELETE_LINK:
      caseDeleteLink(store)
      break
    default:
      next(action);
  }
};

export default linksMiddleware;
