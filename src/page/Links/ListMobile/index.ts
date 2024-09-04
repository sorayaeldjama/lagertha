'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { FileMetaOutput } from '@/services/openapi';
import { downloadAllFiles, downloadFile } from '@/actions/link';
import { changeMainPageFields } from '@/actions/main';
import { MainState } from '@/reducers/mainReducer';
import { LinksState } from '@/reducers/linksReducer';
import { changeLinksPageFields } from '@/actions/links';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  links: state.links.links,
  isConfirmDeleteLink: state.links.isConfirmDeleteLink,
  pages_to_display: state.links.pages_to_display,
  current_page: state.links.page,
  total_items: state.links.total_items,
  items_per_page: state.links.items_per_page,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeLinksPageFields: (payload: Partial<LinksState>) => {
    dispatch(changeLinksPageFields(payload))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
