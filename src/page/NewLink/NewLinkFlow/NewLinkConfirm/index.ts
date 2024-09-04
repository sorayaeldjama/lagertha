'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { Dispatch } from '@reduxjs/toolkit';
import { changeNewLinkPageFields, resertNewLink } from '@/actions/newLink';
import { NewLinkState } from '@/reducers/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  createdLink: state.newLink.createdLink,
  password: state.newLink.password,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
  resertNewLink: () => {
    dispatch(resertNewLink())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  