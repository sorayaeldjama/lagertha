'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { SignupState } from '@/reducers/signupReducer';
import { changeSignupPageFields } from '@/actions/signup';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  currentStep: state.signup.currentStep,
  signupPassword: state.signup.signupPassword,
  signupConfirmPassword: state.signup.signupConfirmPassword,
  signupEmail: state.signup.signupEmail,
  signupFirstname: state.signup.signupFirstname,
  signupLastname: state.signup.signupLastname,
  isSignupPasswordOpen: state.signup.isSignupPasswordOpen,
  isSignUpError: state.signup.isSignUpError,


});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSignupPageFields: (payload: Partial<SignupState>) => {
    dispatch(changeSignupPageFields(payload))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
