'use client'
import { connect } from 'react-redux';
import ViewModel from './Model';
import { changeMainPageFields } from '@/actions/main';
import { changeNewLinkPageFields, createFile, uploadFile } from '@/actions/newLink';
import { NewLinkState } from '@/reducers/newLink';
import { MainState } from '@/reducers/mainReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  selectedFiles: state.newLink.selectedFiles,
  uploadFileError: state.newLink.uploadFileError,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
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
