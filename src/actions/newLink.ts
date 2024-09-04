import { SnackType } from "@/enums/snackType.enum";
import { MainState } from "@/reducers/mainReducer";
import { NewLinkState } from "@/reducers/newLink";
import { ErrorObject } from "@/services/openapi";
import { CredentialOutput, CredentialOutputTransfer } from "@/types/credentials";
// import { CredentialOutput } from "@/services/openapi";

export enum NewLinkType {
  CHANGE_NEW_LINK_PAGE_FIELDS = "CHANGE_NEW_LINK_PAGE_FIELDS",
  UPLOAD_FILE = "UPLOAD_FILE",
  CREATE_FILE = "CREATE_FILE",
  RESET_NEW_LINK = "RESET_NEW_LINK",
  SEND_LINK = "SEND_LINK"
}

export const changeNewLinkPageFields = (payload: Partial<NewLinkState>) => ({
  type: NewLinkType.CHANGE_NEW_LINK_PAGE_FIELDS,
  payload,
});

export const uploadFile = () => ({
  type: NewLinkType.UPLOAD_FILE,
});

export const createFile = () => ({
  type: NewLinkType.CREATE_FILE,

});
export const resertNewLink = () => ({
  type: NewLinkType.RESET_NEW_LINK
})
export const sendNewLinkByEmail = () => ({
  type: NewLinkType.SEND_LINK
})