'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeSettingsPageFields, getParams, getParamsLanguage } from '@/actions/settings';
import { SettingsState } from '@/reducers/settingsReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  lightMode: state.settings.lightMode,
  selectedLightMode: state.settings.selectedLightMode,
  settingsParams: state.settings.settingsParams,
  currentLanguage: state.settings.currentLanguage

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  getParams: () => {
    dispatch(getParams())
  },
  getParamsLanguage: () => {
    dispatch(getParamsLanguage())
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
