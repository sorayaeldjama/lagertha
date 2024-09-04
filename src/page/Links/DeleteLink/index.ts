'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { AuthenticationState } from '@/reducers/authentication';
import { changeLinksPageFields, delete_link } from '@/actions/links';
import { LinksState } from '@/reducers/linksReducer';
import { LinkState } from '@/reducers/linkReducer';
import { closeSnack } from '@/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isConfirmDeleteLink: state.links.isConfirmDeleteLink,
  isDeleted: state.links.isDeleted,
  isSnackOpen:state.links.isSnackOpen,
  snack: state.main.snack

});
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeLinksPageFields: (payload: Partial<LinksState>) => {
    dispatch(changeLinksPageFields(payload))
  },
  delete_link: () => {
    dispatch(delete_link())
  },
  closeSnack :()=>{
    dispatch(closeSnack())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
