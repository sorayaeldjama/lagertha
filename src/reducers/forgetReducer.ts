import { ForgetType } from '@/actions/forget';
import { ForgetStep } from '@/enums/forgetStep.enum';
  export type ForgetState = {
    step: ForgetStep;
    login: string;
    code: string;
    loaderStart: boolean;
    reset_token: string;
    newPassword: string;
    newConfirmPassword: string;
    errorNewPassword: boolean;
    is_otp_need: boolean;
    otp_code: string;
  }

  const initialState: ForgetState= {
    step: ForgetStep.START,
    login: "",
    code: "",
    loaderStart: false,
    reset_token: "",
    newPassword: "",
    newConfirmPassword: "",
    errorNewPassword: false,
    is_otp_need: false,
    otp_code: ""
  };
  
  const forgetReducer = (state: ForgetState = initialState, action: any = {}) => {
    switch (action.type) {
      case ForgetType.CHANGE_FORGETPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default forgetReducer;
  