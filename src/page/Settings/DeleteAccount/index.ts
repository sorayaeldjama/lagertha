'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields, deleteAccount } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isDeleteAccountOpen:state.settings.isDeleteAccountOpen,
  logInPassword:state.authentication.logInPassword,
  deleteAccountPassword:state.authentication.deleteAccountPassword
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  deleteAccount:()=>{
    dispatch(deleteAccount())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  