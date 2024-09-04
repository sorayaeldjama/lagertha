'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { changeWelcomePageFields } from '@/actions/welcome';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLinkPasswordCopied: state.welcome.isLinkPasswordCopied,
  linkPassword: state.welcome.linkPassword,

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
