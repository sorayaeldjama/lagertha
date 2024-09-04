import { AnyAction } from "redux";
import { ContactType } from "@/actions/contact";

export type ContactState = {
    subject: string;
    message: string;
    isSendMessage: boolean;
    isConfirmSendMessage: boolean;
    sendContactSnackSucces:string ;
    sendContactSnackError:string ; 
    subjectEmptyError:boolean;
    messageEmptyError:boolean; 

};
const initialState: ContactState = {
    subject: "",
    message: "",
    isSendMessage: false,
    isConfirmSendMessage: false,
    sendContactSnackSucces:"", 
    sendContactSnackError:"",
    subjectEmptyError:false,
    messageEmptyError:false

};

const contactReducer = (
    state: ContactState = initialState,
    action: AnyAction = { type: "" }
) => {
    switch (action.type) {
        case ContactType.CHANGE_CONTACT_PAGE_FIELDS: {
            return {
                ...state,
                ...action.payload,
            } as ContactState;
        }
        default:
            return state as ContactState;
    }
};

export default contactReducer;
