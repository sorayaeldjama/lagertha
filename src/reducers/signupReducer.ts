import { SignupType } from "@/actions/signup";
import { SignupStepEnum } from "@/enums/signupStep.enum";
export type SignupState = {
  isSignUpFormOpen: boolean;
  loading: boolean;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupLogin: string;
  signupApplicationUuid: string;
  firstNameError: boolean;
  lastNameError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  emailError: boolean;
  currentStep: SignupStepEnum,
  isSignupPasswordOpen: boolean,
  isSignupDetailsOpen: boolean,
  isLowerCaseLetter: boolean;
  isUpperCaseLetter: boolean;
  isEightCaracter: boolean;
  isPassEmpty: boolean;
  isDigit: boolean;
  isSignUpError: boolean;
  isUserEmailAlreadyExit: boolean;
};

const initialState: SignupState = {
  isSignUpFormOpen: false,
  loading: false,
  signupEmail: '',
  signupPassword: '',
  signupConfirmPassword: '',
  signupFirstname: '',
  signupLastname: '',
  signupLogin: '',
  signupApplicationUuid: '',
  firstNameError: false,
  lastNameError: false,
  passwordError: false,
  confirmPasswordError: false,
  emailError: false,
  currentStep: SignupStepEnum.USER_DETAILS,
  isSignupPasswordOpen: false,
  isSignupDetailsOpen: true,
  isLowerCaseLetter: false,
  isUpperCaseLetter: false,
  isEightCaracter: false,
  isPassEmpty: false,
  isDigit: false,
  isSignUpError: false,
  isUserEmailAlreadyExit: false

};

const signupReducer = (state: SignupState = initialState, action: any = {}) => {
  switch (action.type) {
    case SignupType.CHANGE_SIGNUPPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      } as SignupState;
    default:
      return state as SignupState;
  }
};

export default signupReducer;
