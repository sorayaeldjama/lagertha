'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { FileMetaOutput } from '@/services/openapi';
import { downloadAllFiles, downloadFile } from '@/actions/link';
import { changeMainPageFields } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';
import { LinksState } from '@/reducers/linksReducer';
import { changeLinksPageFields } from '@/actions/links';
import { changeFilesPageFields, downloadFileLink } from '@/actions/files';
import { FilesState } from '@/reducers/FilesReducer';
import { changeSettingsPageFields } from '@/actions/settings';
import { SettingsState } from '@/reducers/settingsReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  pages_to_display: state.files.pages_to_display,
  current_page: state.files.page,
  total_items: state.files.total_items,
  items_per_page: state.files.items_per_page,
  files: state.files.files,

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
  changeSettingsPageFields: (payload: Partial<SettingsState>) => {
    dispatch(changeSettingsPageFields(payload))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
