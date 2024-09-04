import { CreditsType } from "@/actions/credits";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseGetProducts } from "./case/caseGetProducts";
import { caseSelectCreditsPack } from "./case/caseSelectCreditsPack";

const creditsMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case CreditsType.SELECT_CREDITS_PACK:
        await caseSelectCreditsPack(store, action);
        break;
      case CreditsType.GET_PRODUCTS:
        await caseGetProducts(store);
        break;
      default:
        next(action);
    }
  };

export default creditsMiddleware;
