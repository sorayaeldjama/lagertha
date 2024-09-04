import { SignupState } from "@/reducers/signupReducer";

  export enum SignupType  {
    CHANGE_SIGNUPPAGE_FIELDS = 'CHANGE_SIGNUPPAGE_FIELDS',
    SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM'
  }
  export const changeSignupPageFields = (payload: Partial<SignupState> ) => ({
    type: SignupType.CHANGE_SIGNUPPAGE_FIELDS,
    payload,
  });

  export const submitSignupForm = () => ({
    type: SignupType.SUBMIT_SIGNUP_FORM
  })