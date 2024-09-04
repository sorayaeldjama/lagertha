'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { AuthenticationState } from '@/reducers/authentication';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  // isTransferHomeOpen: state.transferHome.isTransferHomeOpen,
  isLogged: state.main.isLogged,
  coins: state.main.coins
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<AuthenticationState>) => {
    dispatch(changeMainPageFields(payload))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
