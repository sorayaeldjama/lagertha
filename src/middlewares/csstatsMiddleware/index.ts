import { CsstatsType } from "@/actions/csstats";
import { RootState } from "@/store";
import { Middleware } from "redux";
import { caseGetDailyAnalytics } from "./case/caseGetDailyAnalytics";

const csstatsMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    switch (action.type) {
      case CsstatsType.GET_DAILY_ANALYTICS:
        await caseGetDailyAnalytics(store)
      default:
        next(action);
    }
  };

export default csstatsMiddleware;
