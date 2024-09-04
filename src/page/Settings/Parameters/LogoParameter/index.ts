'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  selectedLogo:state.settings.selectedLogo
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  