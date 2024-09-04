import { WelcomeState } from "@/reducers/welcomeReducer";

export enum WelcomeType {
  CHANGE_WELCOMEPAGE_FIELDS = 'CHANGE_WELCOMPAGE_FIELDS',
  CREATE_FREE_LINK = 'CREATE_FREE_LINK',
  SEND_LINK_BY_EMAIL = 'SEND_LINK_BY_EMAIL'
}

export const changeWelcomePageFields = (payload: Partial<WelcomeState>) => ({
  type: WelcomeType.CHANGE_WELCOMEPAGE_FIELDS,
  payload,
});

export const createFreeLink = () => ({
  type: WelcomeType.CREATE_FREE_LINK
});
export const sendLinkByEmail = () => ({
  type: WelcomeType.SEND_LINK_BY_EMAIL
})