'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { AuthenticationState } from '@/reducers/authentication';
import { changeMainPageFields, closeSnack } from '@/actions/main';
import { RootState } from '@/store';
import { ContactState } from '@/reducers/contactReducer';
import { changeContactPageFields, send_message } from '@/actions/contact';
import { SettingsState } from '@/reducers/settingsReducer';
import { changeSettingsPageFields } from '@/actions/settings';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  isLogged: state.main.isLogged,
  subject: state.contact.subject,
  message: state.contact.message,
  isSendMessage: state.contact.isSendMessage,
  isConfirmSendMessage: state.contact.isConfirmSendMessage,
  snack: state.main.snack,
  subjectEmptyError: state.contact.subjectEmptyError,
  messageEmptyError: state.contact.messageEmptyError

  


});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<AuthenticationState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
  changeContactPageFields: (payload: Partial<ContactState>) => {
    dispatch(changeContactPageFields(payload))
  },
  send_message: () => {
    dispatch(send_message())
  },
  closeSnack: () => {
    dispatch(closeSnack())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
