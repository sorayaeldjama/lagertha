'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { AuthenticationState } from '@/reducers/authentication';
import { changeAuthenticationPageFields } from '@/actions/authentication';
import { changeSignupPageFields } from '@/actions/signup';
import { SignupState } from '@/reducers/signupReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLoginFormOpen: state.authentication.isLoginFormOpen,
  isSignUpFormOpen: state.signup.isSignUpFormOpen,
  loading: state.signup.loading,

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
