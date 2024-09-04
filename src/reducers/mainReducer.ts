import { AnyAction } from "redux";
import { MainType } from "@/actions/main";
import { Role } from "@/enums/roles.enum";
import { Jwt } from "@/types/jwt";
import { Snack } from "@/types/snack";
import { SnackType } from "@/enums/snackType.enum";



export type MainState = {
  isSideBarOpen: boolean;
  isLoginFormOpen: boolean;
  loadingLoginForm: boolean;
  securityLoader: boolean;
  isLogged: boolean;
  roles: Role[];
  userJwt: Jwt | null;
  isLogOut: boolean;
  isConfirmLogout: boolean;
  snack: Snack | null;
  coins: number;


};

const initialState: MainState = {
  isSideBarOpen: true,
  isLoginFormOpen: true,
  loadingLoginForm: false,
  securityLoader: true,
  isLogged: false,
  roles: [],
  userJwt: null,
  isLogOut: false,
  isConfirmLogout: false,
  snack:null,
  coins: 0,

};

const mainReducer = (
  state: MainState = initialState,
  action: AnyAction = { type: "" }
) => {
  switch (action.type) {
    case MainType.CHANGE_MAINPAGE_FIELDS: {
      return {
        ...state,
        ...action.payload,
      } as MainState;
    }

    default:
      return state as MainState;
  }
};

export default mainReducer;
