'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { connectUserLink } from '@/actions/link';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  loading: state.link.loading,
  currentLink: state.link.currentLink,
  password_need: state.link.password_need,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  connectUserLink: (uuid: string, p: string) => {
    dispatch(connectUserLink(uuid, p))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  