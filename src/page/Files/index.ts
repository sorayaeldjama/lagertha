'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { changeMainPageFields, closeSnack } from '@/actions/main';
import { AuthenticationState } from '@/reducers/authentication';
import { changeFilesPageFields, delete_file, downloadFileLink, get_files } from '@/actions/files';
import { FilesState } from '@/reducers/FilesReducer';
import { FileMetaOutput } from '@/services/openapi';
import { MainState } from '@/reducers/mainReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLogged: state.main.isLogged,
  pages_to_display: state.files.pages_to_display,
  current_page: state.files.page,
  total_items: state.files.total_items,
  items_per_page: state.files.items_per_page,
  files: state.files.files,
  downloading:state.link.downloading,
  snack: state.main.snack


});
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeFilesPageFields: (payload: Partial<FilesState>) => {
    dispatch(changeFilesPageFields(payload))
  },
  downloadFileLink: (file: FileMetaOutput) => {
    dispatch(downloadFileLink(file))
  },
  closeSnack: () => {
    dispatch(closeSnack())
  },
  get_files: () => {
    dispatch(get_files())
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
