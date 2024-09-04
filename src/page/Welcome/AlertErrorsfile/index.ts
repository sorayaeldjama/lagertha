'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { changeWelcomePageFields } from '@/actions/welcome';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  selectedFile: state.welcome.selectedFile,
  maxSizeError: state.welcome.maxSizeError,

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
