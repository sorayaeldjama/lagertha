import { SignupType } from "@/actions/signup";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseSubmitCreateLink } from "./case/submitCreateNewLink";
import { NewLinkType } from "@/actions/newLink";
import { caseGetLinks } from "./case/getLinks";
import { caseSendNewLinkByEmail } from "./case/caseSendLinkByEmail";

const newLinkMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
  switch (action.type) {
    case NewLinkType.CREATE_FILE: {
      caseSubmitCreateLink(store)
      break
    }
    case NewLinkType.CREATE_FILE: {
      caseGetLinks(store)
      break
    }
    case NewLinkType.SEND_LINK: {
      caseSendNewLinkByEmail(store)
      break
    }
    default:
      next(action);
  }
};
export default newLinkMiddleware;
