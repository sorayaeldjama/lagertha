import { changeMainPageFields } from "@/actions/main";
import { OpenAPI, UserCoinsCount, UserService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { AnyAction } from "redux";

export const caseGetCredits = async (store: ReduxStore) => {
  try {
    const token = localStorage.getItem("token_lagertha_transfer");
    if (!token) throw "no token";

    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const coins =
      (await UserService.userControllerGetUserCoinsCount()) as UserCoinsCount;
    store.dispatch(
      changeMainPageFields({
        coins: coins.count,
      })
    );
  } catch {}
};
