'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { Dispatch } from 'redux';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  roles: state.main.roles,
  isLogged: state.main.isLogged
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  