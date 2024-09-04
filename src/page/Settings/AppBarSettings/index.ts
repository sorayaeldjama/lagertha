'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeSettingsPageFields, getParams } from '@/actions/settings';
import { SettingsState } from '@/reducers/settingsReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  settingsParams:state.settings.settingsParams
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  getParams: () => {
    dispatch(getParams())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
