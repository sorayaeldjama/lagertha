import { changeAdminsystemPageFields } from "@/actions/adminsystem";
import { changeAdminusersPageFields } from "@/actions/adminusers";
import { changeCreditsPageFields } from "@/actions/credits";
import {
  ListDto_for_UserOutput,
  OpenAPI,
  ProductOutput,
  ProductService,
  SystemInformationOutput,
  SystemService,
  UserService,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseSubmitNewProduct = async (store: ReduxStore) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const { products } = store.getState().credits;
    const { newTitle, newDescription, newAmount, newCredits } =
      store.getState().financeProducts;
    const newProduct = (await ProductService.productControllerNewProduct({
      title: newTitle,
      description: newDescription,
      amount: newAmount * 100,
      currency: "eur",
      coins: newCredits,
    })) as ProductOutput;
    store.dispatch(
      changeCreditsPageFields({
        products: [newProduct, ...products],
      })
    );
  } catch {}
};
