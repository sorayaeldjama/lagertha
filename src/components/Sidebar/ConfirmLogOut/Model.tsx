'use client'
import { useCallback } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { LinksState } from '@/reducers/linksReducer';
import { MainState } from '@/reducers/mainReducer';

type Props = {
  changeLinksPageFields: ReduxUniversalSetter<LinksState>;
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  logout: VoidFunction;
  isConfirmLogout: boolean;
  isLogOut: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeLinksPageFields,
  changeMainPageFields,
  logout,
  isConfirmLogout,
  isLogOut
}) => {
  const onClickDeleteLink = useCallback(() => {
    changeLinksPageFields({ isConfirmDeleteLink: true })
  }, [changeLinksPageFields])

  const onCloseSnackBar = useCallback(() => {
    changeLinksPageFields({ isDeleted: false })
  }, [changeLinksPageFields])

  const onCloseConfirmLogout = useCallback(() => {
    changeMainPageFields({ isConfirmLogout: false })
  }, [changeLinksPageFields])

  const onAgreeLogout = useCallback(() => {
    logout()
    changeLinksPageFields({ isConfirmDeleteLink: false })
  }, [changeLinksPageFields, logout])

  return (
    <View {...{
      onClickDeleteLink,
      onCloseSnackBar,
      onCloseConfirmLogout,
      onAgreeLogout,
      isConfirmLogout,
      isLogOut,
      logout

    }} />
  );
};

export default ViewModel;