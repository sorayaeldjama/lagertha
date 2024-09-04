import { changeForgetPageFields } from "@/actions/forget";
import { ForgetStep } from "@/enums/forgetStep.enum";
import { OpenAPI, UserService } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";

export const caseGetResetCode = async (store: ReduxStore) => {
  try {
    const { login } = store.getState().forget;
    store.dispatch(
      changeForgetPageFields({
        loaderStart: true,
      })
    );
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    const _ = await UserService.userControllerSendResetCode({
      login,
    });
    store.dispatch(
        changeForgetPageFields({
          step: ForgetStep.CODE,
        })
      );
  } catch {}
  store.dispatch(
    changeForgetPageFields({
      loaderStart: false,
    })
  );
};
