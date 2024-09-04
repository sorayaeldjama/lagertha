import { changeAdminsystemPageFields } from "@/actions/adminsystem";
import { changeAdminusersPageFields } from "@/actions/adminusers";
import { changeCreditsPageFields } from "@/actions/credits";
import {
  ListDto_for_UserOutput,
  OpenAPI,
  ProductService,
  SystemInformationOutput,
  SystemService,
  UserService,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseDeleteProduct = async (store: ReduxStore, action: any) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const {products} = store.getState().credits
    await ProductService.productControllerDeleteProduct(action.product_id);
    store.dispatch(changeCreditsPageFields({
        products: products.filter((product) => product.id !== action.product_id)
    }))


  } catch {}
};
