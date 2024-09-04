'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { SettingsState } from '@/reducers/settingsReducer';
import { applyMfa, changeSettingsPageFields, disableMfa } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  is_2fa: state.settings.is_2fa,
  otp_code: state.settings.otp_code,
  totp: state.settings.totp,
  mfa_loading: state.settings.mfa_loading,
  totpDisable: state.settings.totpDisable,
  switchChecked: state.settings.switchChecked,
  isDisableMfaOpen:state.settings.isDisableMfaOpen,
  isEnableMfaOpen:state.settings.isEnableMfaOpen,
  isMfaActive:state.settings.isMfaActive

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
    changeSettingsPageFields: (payload: Partial<SettingsState>) => {
      dispatch(changeSettingsPageFields(payload))
    },
   applyMfa: () => {
      dispatch(applyMfa())
    },
    disableMfa: () => {
      dispatch(disableMfa())
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
