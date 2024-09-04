'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { Dispatch } from '@reduxjs/toolkit';
import { getDailyAnalytics } from '@/actions/csstats';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  dailies: state.csStats.dailies
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDailyAnalytics: () => {
    dispatch(getDailyAnalytics())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  