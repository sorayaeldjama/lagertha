'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields, sendNewLinkByEmail } from '@/actions/newLink';
import { closeSnack } from '@/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isSendByEmailOpen: state.newLink.isSendByEmailOpen,
  emailSendLink:state.newLink.emailSendLink,
  emailError:state.newLink.emailError,
  isSendByEmail:state.newLink.isSendByEmail,
  isLinkSended:state.newLink.isLinkSended,
  snack: state.main.snack


});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
  sendNewLinkByEmail: () => {
    dispatch(sendNewLinkByEmail())
  },
  closeSnack :()=>{
    dispatch(closeSnack())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  