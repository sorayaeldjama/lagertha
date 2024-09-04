'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields, getParams, getParamsLanguage, putParams, putParamsLanguage } from '@/actions/settings';
import { ParameterUpdateInput } from '@/services/openapi';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  settingsParams: state.settings.settingsParams,
  lightMode: state.settings.lightMode,
  themeMode: state.settings.themeMode,
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
  putParams: () => {
    dispatch(putParams());
  },
  putParamsLanguage: () => {
    dispatch(putParamsLanguage());
  },
  getParamsLanguage: () => {
    dispatch(getParamsLanguage());

  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
