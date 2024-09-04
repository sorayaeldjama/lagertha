'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { FileMetaOutput } from '@/services/openapi';
import { downloadAllFiles, downloadFile } from '@/actions/link';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { changeWelcomePageFields } from '@/actions/welcome';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  currentLink: state.link.currentLink,
  downloading: state.link.downloading
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeWelcomePageFields: (payload: Partial<WelcomeState>) => {
    dispatch(changeWelcomePageFields(payload));
  },
  downloadFile: (file: FileMetaOutput) => {
    dispatch(downloadFile(file))
  },
  downloadAllFiles: () => {
    dispatch(downloadAllFiles())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  