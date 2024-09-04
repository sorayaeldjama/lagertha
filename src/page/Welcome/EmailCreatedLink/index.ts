'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeWelcomePageFields, createFreeLink, sendLinkByEmail } from '@/actions/welcome';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { resertNewLink } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  emailSendLink: state.welcome.emailSendLink,
  isLinkPasswordOpen: state.welcome.isLinkPasswordOpen,
  createdLink: state.welcome.createdLink,
  emailError: state.welcome.emailError,
  emailEmpty:state.welcome.emailEmpty
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeWelcomePageFields: (payload: Partial<WelcomeState>) => {
    dispatch(changeWelcomePageFields(payload));
  },
  createFreeLink: () => {
    dispatch(createFreeLink())
  },
  sendLinkByEmail: () => {
    dispatch(sendLinkByEmail())
  },
  resertNewLink: () => {
    dispatch(resertNewLink())
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
