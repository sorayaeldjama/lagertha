'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { AuthenticationState } from '@/reducers/authentication';
import { changeMainPageFields } from '@/actions/main';
import { changeAuthenticationPageFields, submitLogInForm } from '@/actions/authentication';
import { SignupState } from '@/reducers/signupReducer';
import { changeSignupPageFields } from '@/actions/signup';
import { MainState } from '@/reducers/mainReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLoginFormOpen:state.authentication.isLoginFormOpen,
  logInLogin: state.authentication.logInLogin,
  appUuid: state.authentication.appUuid,
  logInPassword: state.authentication.logInPassword,
  loading: state.signup.loading,
  isLogged: state.main.isLogged,
  loadinLoginForm: state.authentication.loadinLoginForm,
  // isTransferHomeOpen: state.transferHome.isTransferHomeOpen,
  isSideBarOpen: state.main.isSideBarOpen,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeAuthenticationPageFields: (payload: Partial<AuthenticationState>) => {
    dispatch(changeAuthenticationPageFields(payload))
  },
  changeSignupPageFields: (payload: Partial<SignupState>) => {
    dispatch(changeSignupPageFields(payload))
  },
  // submitSignupForm: () => {
  //   dispatch(submitSignupForm())
  // },
  submitLogInForm: (login: string, password: string) => {
    dispatch(submitLogInForm(login, password))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
