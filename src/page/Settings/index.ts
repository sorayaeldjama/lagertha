"use client";
import { connect } from "react-redux";

import ViewModel from "./Model";
import { RootState } from "@/store";
import { Dispatch } from "@reduxjs/toolkit";
import { applyMfa, changeSettingsPageFields, disableMfa, editPassword, getParamsLanguage } from "@/actions/settings";
import { SettingsState } from "@/reducers/settingsReducer";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  newPassword: state.settings.newPassword,
  newConfirmPassword: state.settings.newConfirmPassword,
  oldPassword: state.settings.oldPassword,
  editPasswordLoader: state.settings.editPasswordLoader,
  editResult: state.settings.editResult,
  isEditPasswordOpen: state.settings.isEditPasswordOpen,
  lightMode: state.settings.lightMode, 
  currentLanguage:state.settings.currentLanguage
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  editPassword: () => {
    dispatch(editPassword())
  },
  applyMfa: () => {
    dispatch(applyMfa())
  },
  disableMfa: () => {
    dispatch(disableMfa())
  },
  getParamsLanguage: () => {
    dispatch(getParamsLanguage());

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
