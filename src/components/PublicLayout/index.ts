'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { getParamsLanguage } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  mode:state.settings.mode ,
  lightMode: state.settings.lightMode,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  getParamsLanguage: () => {
    dispatch(getParamsLanguage())
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  