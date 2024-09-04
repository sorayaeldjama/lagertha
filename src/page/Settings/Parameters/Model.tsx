'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SettingsState } from '@/reducers/settingsReducer';
import { ParameterOutput, ParameterUpdateInput } from '@/services/openapi';
import { useCallback, useEffect, useState } from 'react';
import { Theme_Color } from '@/enums/themeColor.enum';
import { SelectChangeEvent } from '@mui/material';
import { useTranslation } from '@/hooks/useTranslation';
import router from 'next/router';
import { Page } from '@/enums/pages.enum';
import { useRouter } from 'next/navigation';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  getParams: VoidFunction;
  putParams: VoidFunction;
  putParamsLanguage: VoidFunction;
  getParamsLanguage: VoidFunction;
  settingsParams: ParameterOutput[];
  lightMode: Theme_Color | null;
  currentLanguage: string | null
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  getParams,
  putParams,
  putParamsLanguage,
  getParamsLanguage,
  settingsParams,
  lightMode,
  currentLanguage

}) => {


  const [selectedValue, setSelectedValue] = useState<string>('');
  const { t } = useTranslation();

  const onChangeLanguage = useCallback((event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    changeSettingsPageFields({ currentLanguage: newValue });
    putParamsLanguage()

  }, [changeSettingsPageFields]);

  useEffect(() => {
    getParams()
  }, [])

  useEffect(() => {
    getParamsLanguage()
  }, [])

  const handleChange = useCallback((theme: Theme_Color) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeSettingsPageFields({ lightMode: theme });
      putParams()
    }, [changeSettingsPageFields, Theme_Color],);

  return (
    <View {...{
      settingsParams,
      selectedValue,
      handleChange,
      lightMode,
      onChangeLanguage,
      currentLanguage
    }} />
  );
};

export default ViewModel;