import { LinkType } from "@/actions/link";
import { LinkOutput } from "@/services/openapi";
export type LinkState = {
  loading: boolean,
  currentLink: null | LinkOutput,
  downloading: boolean,
  password_need: boolean,
  password: string;
  passwordLoader: boolean;
  errorPassword: boolean;
};

const initialState: LinkState = {
  loading: false,
  currentLink: null,
  downloading: false,
  password_need: false,
  password: "",
  passwordLoader: false,
  errorPassword: false
};

const linkReducer = (state: LinkState = initialState, action: any = {}) => {
  switch (action.type) {
    case LinkType.CHANGE_LINKPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default linkReducer;
