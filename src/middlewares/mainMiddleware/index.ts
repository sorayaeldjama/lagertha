import { RootState } from "@/store";
import { Middleware, Store } from "redux";
import { MainType, addSnack } from "@/actions/main";
import { caseLogUser } from "./cases/logUser";
import { caseCheckIsLogged } from "./cases/checkIsLogged";
import { caseLogout } from "./cases/logoutUser";
import { caseAddSnack } from "./cases/addSnack";
import { caseCloseSnack } from "./cases/closeSnack";
import { caseGetCredits } from "./cases/caseGetCredit";

const mainMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case MainType.GET_CREDITS:
        await caseGetCredits(store)
        break
      case MainType.LOG_USER: {
        await caseLogUser(store, action)
        break
      }
      case MainType.CHECK_IS_LOGGED: {
        await caseCheckIsLogged(store, action)
        break
      }
      case MainType.LOGOUT: {
        await caseLogout(store)
        break
      }
      case MainType.ADD_SNACK: {
        await caseAddSnack(store,action)
        break
      }
      case MainType.CLOSE_SNACK: {
        caseCloseSnack(store)
        break
      }
      default:
        next(action);
    }
  };

export default mainMiddleware;
