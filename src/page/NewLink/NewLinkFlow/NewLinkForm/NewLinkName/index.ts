'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  newLinkName: state.newLink.newLinkName,
  linkNameError: state.newLink.linkNameError,
  emails: state.newLink.emails,
});
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({

  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
