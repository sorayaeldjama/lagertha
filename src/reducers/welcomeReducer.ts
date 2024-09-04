import { WelcomeType } from '@/actions/welcome';
export type WelcomeState = {
  selectedFile: null | File;
  maxSizeError: boolean;
  uploadLoading: boolean | null;
  encryptionLoading: boolean | null;
  linkLoading: boolean | null;
  createdLink: string | null;
  linkPassword: string | null;
  emailSendLink: string;
  linkUuid: string | null;
  welcomeLoading: boolean;
  isLinkPasswordOpen: boolean;
  isLinkEmailOpen: boolean;
  showLoader: boolean;
  isLinkPasswordCopied: boolean;
  isConfirmCreateNewLink: boolean;
  uploadFileError: boolean;
  emailError: boolean;
  isCguChecked:boolean;
  isGetLinkDisabled:boolean;
  isConfirmCguOpen : boolean;
  link_id: null | string;
  isCguShown :boolean;
  isAcceptedCguOnce: boolean;
  isUploadAnotherFileOpen:boolean;
  emailEmpty :boolean; 
}

const initialState: WelcomeState = {
  selectedFile: null,
  maxSizeError: false,
  uploadLoading: null,
  encryptionLoading: null,
  linkLoading: null,
  createdLink: null,
  linkPassword: "",
  emailSendLink: "",
  linkUuid: "",
  welcomeLoading: false,
  isLinkPasswordOpen: false,
  isLinkEmailOpen: true,
  showLoader: false,
  isLinkPasswordCopied: false,
  isConfirmCreateNewLink: false,
  uploadFileError: false,
  emailError: false,
  isCguChecked:false,
  isGetLinkDisabled:false,
  isConfirmCguOpen:false,
  link_id: null,
  isCguShown:true,
  isAcceptedCguOnce:false,
  isUploadAnotherFileOpen:false,
  emailEmpty:false
};

const welwomeReducer = (state: WelcomeState = initialState, action: any = {}) => {
  switch (action.type) {
    case WelcomeType.CHANGE_WELCOMEPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      } as WelcomeState
    default:
      return state;
  }
};

export default welwomeReducer;
