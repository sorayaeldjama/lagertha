import { AnyAction } from "redux";
import { NewLinkType } from "@/actions/newLink";
import { StepEnum } from "@/enums/steps.enum";

export type NewLinkState = {
    selectedFile: File | null;
    newLinkName: string;
    newLinkGroupName: string;
    fileSize: string;
    fileName: string;
    encryptFile: File | null;
    encryptNameFile: string;
    loader: boolean;
    isFormNewLinkOpen: boolean;
    isNewLinkCreated: boolean;
    createdLink: string;
    progress: number;
    password: string;
    confirmPassword: string;
    noPassword: boolean;
    errorFile: boolean;
    errorPassword: boolean;
    isNewLinkNameOpen: boolean;
    isNewLinkPasswordOpen: boolean;
    isUploadFileOpen: boolean;
    isNewLinkDetailsOpen: boolean;
    currentStep: StepEnum;
    isOnClickNextLinkName: boolean;
    isErrorLinkName: boolean;
    linkNameError: boolean;
    isOnClickNextLinkPassword: boolean;
    linkconfirmPasswordError: boolean;
    isPassEmpty: boolean;
    isEightCaracter: boolean;
    isUpperCaseLetter: boolean;
    isLowerCaseLetter: boolean;
    isDigit: boolean;
    uploadFileError: boolean;
    selectedFiles: File[];
    filesIds: string[];
    isSendByEmailOpen: boolean;
    emailSendLink: string;
    emailError: boolean;
    link_id: string;
    isSendByEmail: boolean;
    isLinkSended :boolean;
    showLoader:boolean;
    emails: string[];
    snackCreateNewLinkSucces: string; 
    snackCreateNewLinkError: string; 

};
const initialState: NewLinkState = {
    selectedFile: null,
    newLinkName: "",
    newLinkGroupName: "",
    fileSize: "",
    fileName: "",
    encryptFile: null,
    encryptNameFile: "",
    loader: false,
    isFormNewLinkOpen: true,
    isNewLinkCreated: false,
    createdLink: "",
    progress: 0,
    password: '',
    confirmPassword: '',
    noPassword: false,
    errorFile: false,
    errorPassword: false,
    isNewLinkNameOpen: false,
    isNewLinkPasswordOpen: false,
    isUploadFileOpen: true,
    isNewLinkDetailsOpen: false,
    currentStep: StepEnum.LINK_UPLOAD,
    isOnClickNextLinkName: false,
    isErrorLinkName: false,
    linkNameError: false,
    isOnClickNextLinkPassword: false,
    linkconfirmPasswordError: false,
    isPassEmpty: false,
    isEightCaracter: false,
    isUpperCaseLetter: false,
    isLowerCaseLetter: false,
    isDigit: false,
    uploadFileError: false,
    selectedFiles: [],
    filesIds: [],
    isSendByEmailOpen: false,
    emailSendLink: '',
    emailError: false,
    link_id: "",
    isSendByEmail:false ,
    isLinkSended :false,
    showLoader:false,
    emails: [], 
    snackCreateNewLinkSucces: "" , 
    snackCreateNewLinkError:""

};
const newLinkReducer = (
    state: NewLinkState = initialState,
    action: AnyAction = { type: "" }
) => {
    switch (action.type) {
        case NewLinkType.RESET_NEW_LINK: {
            return initialState
        }
        case NewLinkType.CHANGE_NEW_LINK_PAGE_FIELDS: {
            return {
                ...state,
                ...action.payload,
            } as NewLinkState;
        }
        default:
            return state as NewLinkState;
    }
};

export default newLinkReducer;
