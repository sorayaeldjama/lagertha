'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { Dispatch } from '@reduxjs/toolkit';
import { changeCslinksPageFields, getCsLinks } from '@/actions/cslinks';
import { RootState } from '@/store';
import { CslinksState } from '@/reducers/cslinksReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  links: state.csLinks.links,
  current_page: state.csLinks.page,
  pages_to_display: state.csLinks.pages_to_display,
  total_items: state.csLinks.total_items,
  items_per_page: state.csLinks.items_per_page
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCsLinks: () => {
    dispatch(getCsLinks())
  },
  changeCslinksPageFields: (payload: Partial<CslinksState>) => {
    dispatch(changeCslinksPageFields(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  