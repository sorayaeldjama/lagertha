"use client";
import { connect } from "react-redux";
import ViewModel from "./Model";
import { RootState } from "@/store";
import { Dispatch } from "@reduxjs/toolkit";
import { changeWelcomePageFields, createFreeLink, sendLinkByEmail } from "@/actions/welcome";
import { WelcomeState } from "@/reducers/welcomeReducer";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  selectedFile: state.welcome.selectedFile,
  maxSizeError: state.welcome.maxSizeError,
  welcomeLoading: state.welcome.welcomeLoading,
  uploadLoading: state.welcome.uploadLoading,
  linkLoading: state.welcome.linkLoading,
  encryptionLoading: state.welcome.encryptionLoading,
  emailSendLink: state.welcome.emailSendLink,
  isLinkPasswordOpen: state.welcome.isLinkPasswordOpen,
  isLinkEmailOpen: state.welcome.isLinkEmailOpen,
  showLoader: state.welcome.showLoader,
  isCguChecked:state.welcome.isCguChecked,
  isGetLinkDisabled:state.welcome.isGetLinkDisabled,
  isConfirmCguOpen:state.welcome.isConfirmCguOpen,
  isCguShown:state.welcome.isCguShown,
  isAcceptedCguOnce:state.welcome.isAcceptedCguOnce,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeWelcomePageFields: (payload: Partial<WelcomeState>) => {
    dispatch(changeWelcomePageFields(payload));
  },
  createFreeLink: () => {
    dispatch(createFreeLink())
  },
  sendLinkByEmail: () => {
    dispatch(sendLinkByEmail())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
