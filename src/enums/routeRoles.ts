import path from "path";
import { Page } from "./pages.enum";
import { Role } from "./roles.enum";

export const routeRole = [
  {
    path: Page.TRANSFER,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.LINKS,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.FILES,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.SETTINGS,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.NEWLINK,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.CONTACT,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.CUSTOMER_SUCCESS_LINKS,
    roles: [Role.ROLE_CUSTOMER_SUCCESS],
  },
  {
    path: Page.ADMIN_USERS,
    roles: [Role.ROLE_ADMIN],
  },
  {
    path: Page.CUSTOMER_SUCCESS_STATS,
    roles: [Role.ROLE_CUSTOMER_SUCCESS],
  },
  {
    path: Page.ADMIN_SYSTEM,
    roles: [Role.ROLE_ADMIN],
  },
  {
    path: Page.BUY_CREDITS,
    roles: [Role.ROLE_USER],
  },
  {
    path: Page.PRODUCTS,
    roles: [Role.ROLE_FINANCE],
  },
  // {
  //   path: Page.SIGNUP,
  //   roles: [Role.ROLE_USER],
  // },
];
