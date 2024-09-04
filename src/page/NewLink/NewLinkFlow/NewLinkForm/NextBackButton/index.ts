'use client'
import { connect } from 'react-redux';
import ViewModel from './Model';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields, createFile } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  currentStep: state.newLink.currentStep,
  noPassword: state.newLink.noPassword,
  password: state.newLink.password,
  confirmPassword: state.newLink.confirmPassword,
  selectedFiles: state.newLink.selectedFiles,
  newLinkName: state.newLink.newLinkName,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
  createFile: () => {
    dispatch(createFile())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
