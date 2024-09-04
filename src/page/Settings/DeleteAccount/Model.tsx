'use client'
import { useCallback, useEffect } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { SettingsState } from '@/reducers/settingsReducer';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  deleteAccount: VoidFunction;
  isDeleteAccountOpen: boolean;
  logInPassword: string;
  deleteAccountPassword: string;
}
const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  deleteAccount,
  isDeleteAccountOpen,
  logInPassword,
  deleteAccountPassword,
}) => {
 

  const onCloseConfirmDeleteAccount = useCallback(() => {
    changeSettingsPageFields({ isDeleteAccountOpen: false })
  }, [changeSettingsPageFields])

  const onDeleteAccount = useCallback(() => {
    changeSettingsPageFields({ isDeleteAccountOpen: true })
  }, [changeSettingsPageFields])

  const onChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    changeSettingsPageFields({ deleteAccountPassword: newValue })
  }, [changeSettingsPageFields])

  const onConfirmDeleteAccount = useCallback(() => {
    deleteAccount()
  }, [changeSettingsPageFields])

  return (
    <View {...{
      onCloseConfirmDeleteAccount,
      onDeleteAccount,
      isDeleteAccountOpen,
      onConfirmDeleteAccount,
      deleteAccountPassword,
      onChangePassword
    }} />
  );
};

export default ViewModel;