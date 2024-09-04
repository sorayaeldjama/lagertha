'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { Dispatch } from '@reduxjs/toolkit';
import { changeAdminusersPageFields, changeUserRoles, getUsersAdmin } from '@/actions/adminusers';
import { RootState } from '@/store';
import { AdminusersState } from '@/reducers/adminusersReducer';
import { Role } from '@/enums/roles.enum';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  users: state.adminUsers.users,
  current_page: state.adminUsers.page,
  pages_to_display: state.adminUsers.pages_to_display,
  total_items: state.adminUsers.total_items,
  items_per_page: state.adminUsers.items_per_page,
  userModal: state.adminUsers.userModal
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsersAdmin: () => {
    dispatch(getUsersAdmin())
  },
  changeAdminusersPageFields: (payload: Partial<AdminusersState>) => {
    dispatch(changeAdminusersPageFields(payload))
  },
  changeUserRoles: (user_id: string, roles: Role[]) => {
    dispatch(changeUserRoles(user_id, roles))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  