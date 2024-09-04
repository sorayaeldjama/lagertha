'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields, getCredits, logout } from '@/actions/main';
import { changeNewLinkPageFields, resertNewLink } from '@/actions/newLink';
import { NewLinkState } from '@/reducers/newLink';
import { AuthenticationState } from '@/reducers/authentication';
import { MainState } from '@/reducers/mainReducer';
import { get_links } from '@/actions/links';
import { get_files } from '@/actions/files';
import { RootState } from '@/store';
import { changeSettingsPageFields, getParamsLanguage } from '@/actions/settings';
import { SettingsState } from '@/reducers/settingsReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  userJwt: state.main.userJwt,
  isLogged: state.main.isLogged,
  isLogOut: state.main.isLogOut,
  roles: state.main.roles,
  coins: state.main.coins,
  currentLanguage:state.settings.currentLanguage
});
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  logout: () => {
    dispatch(logout())
  },
  resertNewLink: () => {
    dispatch(resertNewLink())
  },
  get_links: () => {
    dispatch(get_links())
  },
  get_files: () => {
    dispatch(get_files())
  },
  getCredits: () => {
    dispatch(getCredits())
  },
  getParamsLanguage: () => {
    dispatch(getParamsLanguage())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
