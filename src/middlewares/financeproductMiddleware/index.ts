import { FinanceproductsType } from "@/actions/financeproducts";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseDeleteProduct } from "./case/caseDeleteProduct";
import { caseSubmitNewProduct } from "./case/caseSubmitNewProduct";

const financeproductsMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case FinanceproductsType.SUBMIT_NEW_PRODUCT:
        await caseSubmitNewProduct(store);
        break;
      case FinanceproductsType.DELETE_PRODUCT:
        await caseDeleteProduct(store, action);
        break;
      default:
        next(action);
    }
  };

export default financeproductsMiddleware;
