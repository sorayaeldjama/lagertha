'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { FileMetaOutput } from '@/services/openapi';
import { downloadAllFiles, downloadFile } from '@/actions/link';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  currentLink: state.link.currentLink,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
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
  