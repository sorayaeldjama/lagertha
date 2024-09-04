'use client'
import { connect } from 'react-redux';
import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields, createFile, uploadFile } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  selectedFile: state.newLink.selectedFile,
  newLinkName: state.newLink.newLinkName,
  fileName: state.newLink.fileName,
  fileSize: state.newLink.fileSize,
  password: state.newLink.password,
  confirmPassword: state.newLink.confirmPassword,
  noPassword: state.newLink.noPassword,
  errorPassword: state.newLink.errorPassword,
  isNewLinkNameOpen: state.newLink.isNewLinkNameOpen,
  isNewLinkPasswordOpen: state.newLink.isNewLinkPasswordOpen,
  isUploadFileOpen: state.newLink.isUploadFileOpen,
  isNewLinkDetailsOpen: state.newLink.isNewLinkDetailsOpen,
  currentStep: state.newLink.currentStep

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },
  uploadFile: () => {
    dispatch(uploadFile())
  },
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
