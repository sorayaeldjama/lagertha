"use client";
import { useCallback, useEffect, useState } from "react";
import View from "./View";
import { UserOutput } from "@/services/openapi";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { AdminusersState } from "@/reducers/adminusersReducer";
import { Role } from "@/enums/roles.enum";

type Props = {
  getUsersAdmin: VoidFunction;
  users: UserOutput[];
  current_page: number;
  pages_to_display: string[];
  total_items: number;
  items_per_page: number;
  changeAdminusersPageFields: ReduxUniversalSetter<AdminusersState>;
  changeUserRoles: (user_id: string, roles: Role[]) => void;
  userModal: UserOutput | null
};

const ViewModel: React.FC<Props> = ({
  getUsersAdmin,
  users,
  current_page,
  pages_to_display,
  total_items,
  items_per_page,
  changeAdminusersPageFields,
  changeUserRoles,
  userModal
}) => {
  const [roleModal, setRoleModal] = useState<Role[]>([])
  const [rolesError, setRoleError] = useState<boolean>(false)
  useEffect(() => {
    getUsersAdmin();
  }, [current_page]);

  const change_page = useCallback((newPage: number) => {
    changeAdminusersPageFields({ page: newPage })
  }, [changeAdminusersPageFields])

  const onClickEdit = useCallback((user: UserOutput) => () => {
    setRoleModal(user.roles as Role[])
    changeAdminusersPageFields({ userModal: user })
  }, [])

  const onCloseModal = useCallback(() => {
    setRoleModal([])
    changeAdminusersPageFields({ userModal: null })
  }, [])

  const onChangeRole = useCallback((role: Role) => (e: React.BaseSyntheticEvent) => {
    if (e.target.checked) {
      setRoleModal(prev => [...prev, role])
      setRoleError(false)
    } else {
      setRoleModal(prev => prev.filter((r) => r !== role))
    }
  }, [])

  const onValidateRoles = useCallback(() => {
    if (roleModal.length === 0) {
      setRoleError(true)
      return
    }
    if (userModal) {
      changeUserRoles(userModal.id, roleModal)
    }
  }, [userModal, roleModal, changeUserRoles])

  return (
    <View
      {...{
        users,
        current_page,
        pages_to_display,
        total_items,
        items_per_page,
        change_page,
        roleModal,
        userModal,
        onClickEdit,
        onCloseModal,
        onChangeRole,
        onValidateRoles,
        rolesError
      }}
    />
  );
};

export default ViewModel;
