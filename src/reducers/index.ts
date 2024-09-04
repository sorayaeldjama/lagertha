import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import authenticationReducer from "./authentication";
import signupReducer from "./signupReducer";
import transferHomeReducer from "./transferHome";
import newLinkReducer from "./newLink";
import linkReducer from "./linkReducer";
import linksReducer from "./linksReducer";
import settingsReducer from "./settingsReducer";
import forgetReducer from "./forgetReducer";
import welwomeReducer from "./welcomeReducer";
import filesReducer from "./FilesReducer";
import contactReducer from "./contactReducer";
import cslinksReducer from "./cslinksReducer";
import adminusersReducer from "./adminusersReducer";
import csstatsReducer from "./csstatsReducer";
import adminsystemReducer from "./adminsystemReducer";
import creditsReducer from "./creditsReducer";
import financeproductsReducer from "./financeproductsReducer";

const reducers = {
  main: mainReducer,
  authentication: authenticationReducer,
  signup: signupReducer,
  transferHome: transferHomeReducer,
  newLink: newLinkReducer,
  link: linkReducer,
  links: linksReducer,
  settings: settingsReducer,
  forget: forgetReducer,
  welcome: welwomeReducer,
  files: filesReducer,
  contact: contactReducer,
  csLinks: cslinksReducer,
  adminUsers: adminusersReducer,
  csStats: csstatsReducer,
  adminSystem: adminsystemReducer,
  credits: creditsReducer,
  financeProducts: financeproductsReducer
};

export default combineReducers(reducers);
