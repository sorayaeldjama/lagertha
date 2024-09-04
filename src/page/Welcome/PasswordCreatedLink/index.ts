'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { changeWelcomePageFields } from '@/actions/welcome';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  linkPassword: state.welcome.linkPassword,
  showLoader: state.welcome.showLoader,
  isLinkPasswordCopied: state.welcome.isLinkPasswordCopied,
  isConfirmCreateNewLink: state.welcome.isConfirmCreateNewLink,
  isCguShown:state.welcome.isCguShown

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeWelcomePageFields: (payload: Partial<WelcomeState>) => {
    dispatch(changeWelcomePageFields(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
