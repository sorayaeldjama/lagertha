'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { changeLinkPageFields, submitPassword } from '@/actions/link';
import { LinkState } from '@/reducers/linkReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  password: state.link.password,
  errorPassword: state.link.errorPassword,
  passwordLoader: state.link.passwordLoader
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeLinkPageFields: (payload: Partial<LinkState>) => {
    dispatch(changeLinkPageFields(payload))
  },
  submitPassword: (uuid: string) => {
    dispatch(submitPassword(uuid))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  