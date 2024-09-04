'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  loader: state.newLink.loader,
  isNewLinkCreated: state.newLink.isNewLinkCreated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  