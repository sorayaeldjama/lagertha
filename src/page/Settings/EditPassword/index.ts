'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields, editPassword } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  newPassword: state.settings.newPassword,
  newConfirmPassword: state.settings.newConfirmPassword,
  oldPassword: state.settings.oldPassword,
  editPasswordLoader: state.settings.editPasswordLoader,
  editResult: state.settings.editResult,
  isEditPasswordOpen:state.settings.isEditPasswordOpen
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  editPassword: () => {
    dispatch(editPassword())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  