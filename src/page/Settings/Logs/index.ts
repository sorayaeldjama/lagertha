'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { getLogs } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  logsList:state.settings.logsList
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({

  getLogs : ()=>{
    dispatch(getLogs())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  