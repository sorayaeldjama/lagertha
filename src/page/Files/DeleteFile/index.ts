'use client'
import { connect } from 'react-redux';
import ViewModel from './Model';
import { LinksState } from '@/reducers/linksReducer';
import { changeFilesPageFields, delete_file } from '@/actions/files';
import { closeSnack } from '@/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isConfirmDeleteFile: state.files.isConfirmDeleteFile,
  isDeleted: state.files.isDeleted,
  isSnackOpen:state.files.isSnackOpen,
  snack: state.main.snack

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeFilesPageFields: (payload: Partial<LinksState>) => {
    dispatch(changeFilesPageFields(payload))
  },
  delete_file: () => {
    dispatch(delete_file())
  },
  closeSnack :()=>{
    dispatch(closeSnack())
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
