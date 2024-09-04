import { CslinksType } from "@/actions/cslinks";
import { RootState } from "@/store";
import { Middleware } from "redux";
import {caseGetLinks} from './case/caseGetCsLinks'

const cslinksMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case CslinksType.GET_CS_LINKS:
        caseGetLinks(store);
        break;
      default:
        next(action);
    }
  };

export default cslinksMiddleware;
