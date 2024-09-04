'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { AuthenticationState } from '@/reducers/authentication';
import { changeMainPageFields } from '@/actions/main';
import { changeLinksPageFields, get_links } from '@/actions/links';
import { LinksState } from '@/reducers/linksReducer';
import { MainState } from '@/reducers/mainReducer';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isLogged: state.main.isLogged,
  links: state.links.links,
  pages_to_display: state.links.pages_to_display,
  current_page: state.links.page,
  total_items: state.links.total_items,
  items_per_page: state.links.items_per_page,
  isConfirmDeleteLink: state.links.isConfirmDeleteLink,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeMainPageFields: (payload: Partial<MainState>) => {
    dispatch(changeMainPageFields(payload))
  },
  changeLinksPageFields: (payload: Partial<LinksState>) => {
    dispatch(changeLinksPageFields(payload))
  },
  getLinks: () => {
    dispatch(get_links())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);



