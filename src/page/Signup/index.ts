'use client'
import { connect } from 'react-redux';
import ViewModel from './Model';
import { SignupState } from '@/reducers/signupReducer';
import { changeSignupPageFields, submitSignupForm } from '@/actions/signup';
import { submitLogInForm } from '@/actions/authentication';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  loading: state.signup.loading,
  signupEmail: state.signup.signupEmail,
  signupPassword: state.signup.signupPassword,
  signupConfirmPassword: state.signup.signupConfirmPassword,
  signupFirstname: state.signup.signupFirstname,
  signupLastname: state.signup.signupLastname,
  signupLogin: state.signup.signupLogin,
  signupApplicationUuid: state.signup.signupApplicationUuid,
  firstNameError: state.signup.firstNameError,
  lastNameError: state.signup.lastNameError,
  confirmPasswordError: state.signup.confirmPasswordError,
  passwordError: state.signup.passwordError,
  emailError:state.signup.emailError,
  isLogged: state.main.isLogged,
  isSignupPasswordOpen:state.signup.isSignupPasswordOpen,
  isSignupDetailsOpen : state.signup.isSignupDetailsOpen,
  currentStep:state.signup.currentStep,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSignupPageFields: (payload: Partial<SignupState>) => {
    dispatch(changeSignupPageFields(payload))
  },
  submitSignupForm: () => {
    dispatch(submitSignupForm())
  },
  submitLogInForm: (login: string, password: string) => {
    dispatch(submitLogInForm(login, password))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
