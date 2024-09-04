import { FilesState } from "@/reducers/FilesReducer";
import { ContactState } from "@/reducers/contactReducer";
import { FileMetaOutput } from "@/services/openapi";

export enum ContactType {
    CHANGE_CONTACT_PAGE_FIELDS = 'CHANGE_CONTACT_PAGE_FIELDS',
    SEND_MESSAGE = "SEND_MESSAGE",

}

export const changeContactPageFields = (payload: Partial<ContactState>) => ({
    type: ContactType.CHANGE_CONTACT_PAGE_FIELDS,
    payload,
});
export const send_message = () => ({
    type: ContactType.SEND_MESSAGE
})
