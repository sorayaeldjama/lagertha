import { changeCreditsPageFields } from "@/actions/credits";
import { changeCslinksPageFields } from "@/actions/cslinks";
import { OpenAPI, ProductOutput, ProductService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseGetProducts = async (store: ReduxStore) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const products =
      (await ProductService.productControllerGetProducts()) as ProductOutput[];
    store.dispatch(changeCreditsPageFields({ products }));
  } catch {}
};
