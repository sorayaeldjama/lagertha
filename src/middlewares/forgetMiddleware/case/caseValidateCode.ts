import { changeForgetPageFields } from "@/actions/forget";
import { ForgetStep } from "@/enums/forgetStep.enum";
import { OpenAPI, UserReinitToken, UserService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";

export const caseValidateCode = async (store: ReduxStore) => {
  try {
    const { login, code } = store.getState().forget;
    store.dispatch(
      changeForgetPageFields({
        loaderStart: true,
      })
    );
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    const res = (await UserService.userControllerCheckResetCode({
      login,
      reset_code: code,
    })) as UserReinitToken;
    store.dispatch(
      changeForgetPageFields({
        step: ForgetStep.PASSWORD,
        reset_token: res.token,
      })
    );
  } catch {}
  store.dispatch(
    changeForgetPageFields({
      loaderStart: false,
    })
  );
};
