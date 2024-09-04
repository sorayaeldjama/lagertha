import { changeCreditsPageFields } from "@/actions/credits";
import { changeCslinksPageFields } from "@/actions/cslinks";
import {
  OpenAPI,
  PaymentOutput,
  PaymentService,
  ProductOutput,
  ProductService,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";

export const caseSelectCreditsPack = async (store: ReduxStore, action: any) => {
  try {
    await refreshToken();
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const payment = (await PaymentService.paymentControllerPostPayment({
      product: action.productId,
    })) as PaymentOutput;
    const link = document.createElement("a")
    link.href = payment.payment_url

    link.click()
  } catch {}
};
