"use client";
import { connect } from "react-redux";

import ViewModel from "./Model";

import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import {
  changeForgetPageFields,
  getResetCode,
  reinitPassword,
  validateCode,
} from "@/actions/forget";
import { ForgetState } from "@/reducers/forgetReducer";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  step: state.forget.step,
  login: state.forget.login,
  loaderStart: state.forget.loaderStart,
  code: state.forget.code,
  newPassword: state.forget.newPassword,
  newConfirmPassword: state.forget.newConfirmPassword,
  errorNewPassword: state.forget.errorNewPassword,
  isLogged: state.main.isLogged,
  is_otp_need: state.forget.is_otp_need,
  otp_code: state.forget.otp_code,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeForgetPageFields: (payload: Partial<ForgetState>) => {
    dispatch(changeForgetPageFields(payload));
  },
  getResetCode: () => {
    dispatch(getResetCode());
  },
  validateCode: () => {
    dispatch(validateCode());
  },
  reinitPassword: () => {
    dispatch(reinitPassword());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
