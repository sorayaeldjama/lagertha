'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { getAdminSystemInfo, resetAdminSystemInfo } from '@/actions/adminsystem';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  infos: state.adminSystem.infos
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAdminSystemInfo: () => {
    dispatch(getAdminSystemInfo())
  },
  resetAdminSystemInfo: () => {
    dispatch(resetAdminSystemInfo())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  