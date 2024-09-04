'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeAuthenticationPageFields, submitLogInForm } from '@/actions/authentication';
import { AuthenticationState } from '@/reducers/authentication';
import { changeSignupPageFields, submitSignupForm } from '@/actions/signup';
import { SignupState } from '@/reducers/signupReducer';
import { changeMainPageFields } from '@/actions/main';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  isLoginFormOpen: state.authentication.isLoginFormOpen,
  isSignUpFormOpen: state.signup.isSignUpFormOpen,
  logInLogin: state.authentication.logInLogin,
  logInPassword: state.authentication.logInPassword,
  loading: state.signup.loading,
  signupEmail: state.signup.signupEmail,
  signupPassword: state.signup.signupPassword,
  signupConfirmPassword: state.signup.signupConfirmPassword,
  signupFirstname: state.signup.signupFirstname,
  signupLastname: state.signup.signupLastname,
  signupLogin: state.signup.signupLogin,
  signupApplicationUuid: state.signup.signupApplicationUuid,
  isLogged: state.main.isLogged,
  isSideBarOpen: state.main.isSideBarOpen,
  is_otp_need: state.authentication.is_otp_need,
  totp_code: state.authentication.totp_code
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<AuthenticationState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeAuthenticationPageFields: (payload: Partial<AuthenticationState>) => {
    dispatch(changeAuthenticationPageFields(payload))
  },
  changeSignupPageFields: (payload: Partial<SignupState>) => {
    dispatch(changeSignupPageFields(payload))
  },
  submitSignupForm: () => {
    dispatch(submitSignupForm())
  },
  submitLogInForm: (login: string, password: string) => {
    dispatch(submitLogInForm(login, password))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
