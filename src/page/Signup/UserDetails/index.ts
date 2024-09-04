'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeSignupPageFields } from '@/actions/signup';
import { SignupState } from '@/reducers/signupReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  signupEmail: state.signup.signupEmail,
  signupFirstname: state.signup.signupFirstname,
  signupLastname: state.signup.signupLastname,
  firstNameError: state.signup.firstNameError,
  lastNameError: state.signup.lastNameError,
  emailError: state.signup.emailError,
  isSignupPasswordOpen: state.signup.isSignupPasswordOpen,
  isSignUpError: state.signup.isSignUpError,
  isUserEmailAlreadyExit:state.signup.isUserEmailAlreadyExit
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
