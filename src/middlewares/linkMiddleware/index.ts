import { LinkType } from "@/actions/link";
import { SignupType } from "@/actions/signup";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseConnectUserLink } from "./case/caseConnectUserLink";
import { caseDownloadFile } from "./case/caseDownloadFile";
import { caseDownloadAll } from "./case/caseDownloadAll";
import { caseSubmitPassword } from "./case/caseSubmitPassword";

const linkMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case LinkType.SUBMIT_PASSWORD:
        caseSubmitPassword(store, action)
        break
      case LinkType.DOWNLOAD_ALL_FILES:
        caseDownloadAll(store, action);
        break;
      case LinkType.DOWNLOAD_FILE:
        caseDownloadFile(store, action);
        break;
      case LinkType.CONNECT_USER_LINK:
        caseConnectUserLink(store, action);
        break;
      default:
        next(action);
    }
  };

export default linkMiddleware;
