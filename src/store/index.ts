import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/reducers";
import mainMiddleware from "@/middlewares/mainMiddleware";
import signupMiddleware from "@/middlewares/signupMiddleware";
import loginMiddleware from "@/middlewares/logInMiddleware";
import linkMiddleware from "@/middlewares/linkMiddleware";
import newLinkMiddleware from "@/middlewares/newLinkMiddleWare";
import linksReducer from "@/reducers/linksReducer";
import linksMiddleware from "@/middlewares/linksMiddleware";
import settingsMiddleware from "@/middlewares/settingsMiddleware";
import forgetMiddleware from "@/middlewares/forgetMiddleware";
import welcomeMiddleware from "@/middlewares/welcomeMiddleware";
import filesMiddleware from "@/middlewares/filesMiddleware";
import contactMiddleware from "@/middlewares/contactMiddleware ";
import cslinksMiddleware from "@/middlewares/cslinksMiddleware";
import adminusersMiddleware from "@/middlewares/adminUsersMiddleware";
import csstatsMiddleware from "@/middlewares/csstatsMiddleware";
import adminsystemMiddleware from "@/middlewares/adminsystemMiddleware";
import creditsMiddleware from "@/middlewares/creditMiddleware";
import financeproductsMiddleware from "@/middlewares/financeproductMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    new Tuple(
      mainMiddleware,
      signupMiddleware,
      // loginMiddleware,
      // linkMiddleware,
      // newLinkMiddleware,
      // linksMiddleware,
      // settingsMiddleware,
      // forgetMiddleware,
      // welcomeMiddleware,
      // filesMiddleware,
      // contactMiddleware,
      // cslinksMiddleware,
      // adminusersMiddleware,
      // csstatsMiddleware,
      // adminsystemMiddleware,
      // creditsMiddleware,
      // financeproductsMiddleware
    ),
  devTools: false,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
