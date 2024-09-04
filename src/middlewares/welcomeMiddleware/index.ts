import { WelcomeType } from "@/actions/welcome";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseCreateFreeLink } from "./case/caseCreateFreeLink";
import { caseSendLinkByEmail } from "./case/caseSendLinkByEmail";

const welwomMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case WelcomeType.CREATE_FREE_LINK:
        caseCreateFreeLink(store);
        break;
      case WelcomeType.SEND_LINK_BY_EMAIL:
        caseSendLinkByEmail(store);
        break;
      default:
        next(action);
    }
  };

export default welwomMiddleware;
