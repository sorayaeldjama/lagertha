'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SettingsState } from '@/reducers/settingsReducer';
import { useCallback, useState } from 'react';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  editPassword: VoidFunction;
  isEditPasswordOpen:boolean;
  newPassword: string;
  newConfirmPassword: string;
  oldPassword: string;
  editPasswordLoader: boolean;
  editResult: 'success' | 'error' | null;
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  editPassword,
  isEditPasswordOpen,
  newPassword,
  newConfirmPassword,
  oldPassword,
  editPasswordLoader,
  editResult,
}) => {
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorOldPassword, setErrorOldPassword] = useState<boolean>(false)

  const changePassword = useCallback((e: React.BaseSyntheticEvent) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(e.target.value) && e.target.value.length > 7) {
      setErrorPassword(false)
    }
    changeSettingsPageFields({
      newPassword: e.target.value,
    });
  }, []);

  const changeConfirmPassword = useCallback((e: React.BaseSyntheticEvent) => {
    changeSettingsPageFields({
      newConfirmPassword: e.target.value,
    });
  }, []);

  const changeOldPassword = useCallback((e: React.BaseSyntheticEvent) => {
    if (e.target.value.length > 2) {
      setErrorOldPassword(false)
    }
    changeSettingsPageFields({
      oldPassword: e.target.value,
    });
  }, []);

  const onCloseConfirmEditPassword = useCallback(() => {
    changeSettingsPageFields({ isEditPasswordOpen: false })
  }, [changeSettingsPageFields])

  const onSubmitEditPassword = useCallback(() => {
    let error = false
    if (newPassword.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(newPassword)) {
      setErrorPassword(true)
      error = true
    }
    if (newPassword !== newConfirmPassword) {
      error = true
    }
    if (oldPassword.length < 3) {
      setErrorOldPassword(true)
      error = true
    }
    if (!error) {
      editPassword()
    }
  }, [editPassword, newConfirmPassword, newPassword, oldPassword.length])

  const removeError = useCallback(() => {
    changeSettingsPageFields({
      editResult: null
    })
  }, [])
  return (
    <View{...{
      changePassword,
      changeConfirmPassword,
      changeOldPassword,
      errorPassword,
      onSubmitEditPassword,
      errorOldPassword,
      removeError,
      newPassword,
      newConfirmPassword,
      oldPassword,
      editPasswordLoader,
      editResult,
      isEditPasswordOpen,
      onCloseConfirmEditPassword
    }} />
  );
};

export default ViewModel;