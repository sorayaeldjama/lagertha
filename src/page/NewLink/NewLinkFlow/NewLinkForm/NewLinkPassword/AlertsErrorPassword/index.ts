'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  linkconfirmPasswordError: state.newLink.linkconfirmPasswordError,
  isPassEmpty: state.newLink.isPassEmpty,
  errorPassword: state.newLink.errorPassword,
  isEightCaracter: state.newLink.isEightCaracter,
  isUpperCaseLetter: state.newLink.isUpperCaseLetter,
  isLowerCaseLetter: state.newLink.isLowerCaseLetter,
  isDigit: state.newLink.isDigit

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
