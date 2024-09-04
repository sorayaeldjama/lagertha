'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SettingsState } from '@/reducers/settingsReducer';
import { useCallback } from 'react';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  editPassword: VoidFunction;
  editPasswordLoader: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  editPassword,
  editPasswordLoader,
}) => {

  const onSubmitEditPassword = useCallback(() => {
    changeSettingsPageFields({ isEditPasswordOpen: true })
  }, [changeSettingsPageFields])

  return (
    <View {...{
      onSubmitEditPassword,
      editPassword,
      editPasswordLoader
    }} />
  );
};

export default ViewModel;