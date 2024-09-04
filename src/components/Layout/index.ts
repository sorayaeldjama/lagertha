'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { Dispatch } from 'redux';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields } from '@/actions/settings';
import { closeSnack } from '@/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  isLogged: state.main.isLogged,
  securityLoader: state.main.securityLoader,
  roles: state.main.roles,
  snack: state.main.snack

  
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  closeSnack: () => {
    dispatch(closeSnack())
  },
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  