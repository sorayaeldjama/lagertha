'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  password: state.newLink.password,
  confirmPassword: state.newLink.confirmPassword,
  noPassword: state.newLink.noPassword,
  errorPassword: state.newLink.errorPassword,
  currentStep: state.newLink.currentStep,
  isOnClickNextLinkPassword: state.newLink.isOnClickNextLinkPassword,
  linkconfirmPasswordError: state.newLink.linkconfirmPasswordError,
  isPassEmpty: state.newLink.isPassEmpty,
  isLowerCaseLetter: state.newLink.isLowerCaseLetter,
  isUpperCaseLetter: state.newLink.isUpperCaseLetter,
  isEightCaracter: state.newLink.isEightCaracter,

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
