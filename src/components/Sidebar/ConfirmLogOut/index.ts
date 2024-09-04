'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeLinksPageFields } from '@/actions/links';
import { LinksState } from '@/reducers/linksReducer';
import { changeMainPageFields, logout } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isConfirmLogout: state.main.isConfirmLogout,
  isLogOut: state.main.isLogOut,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeLinksPageFields: (payload: Partial<LinksState>) => {
    dispatch(changeLinksPageFields(payload))
  },
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  logout: () => {
    dispatch(logout())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
