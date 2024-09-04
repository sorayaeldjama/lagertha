'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  coins: state.main.coins
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  