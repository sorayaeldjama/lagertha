import { ForgetState } from "@/reducers/forgetReducer";

  export enum ForgetType  {
    CHANGE_FORGETPAGE_FIELDS = 'CHANGE_FORGETPAGE_FIELDS',
    GET_RESET_CODE = 'GET_RESET_CODE',
    VALIDATE_CODE = 'VALIDATE_CODE',
    REINIT_PASSWORD = 'REINIT_PASSWORD'
  }
  
  export const changeForgetPageFields = (payload: Partial<ForgetState> ) => ({
    type: ForgetType.CHANGE_FORGETPAGE_FIELDS,
    payload,
  });
  

  export const getResetCode = () => ({
    type:  ForgetType.GET_RESET_CODE
  })

  export const validateCode = () => ({
    type: ForgetType.VALIDATE_CODE
  })

  export const reinitPassword = () => ({
    type: ForgetType.REINIT_PASSWORD
  })