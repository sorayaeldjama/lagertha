'use client'
import React, { useCallback, useEffect } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { SettingsState } from '@/reducers/settingsReducer';
import { ParameterOutput } from '@/services/openapi';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  getParams: VoidFunction;
  settingsParams: ParameterOutput[] | null
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  getParams,
  settingsParams
}) => {

  const [index, setIndex] = React.useState<number>(0);

  useEffect(() => {
    getParams()
  }, [getParams])


  const capitalizeFirstLetter = useCallback((str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }, []);
  // const getParameters = useCallback(() => {
  //   // changeSettingsPageFields({ isDeleteAccountOpen: true })

  // }, [changeSettingsPageFields])


  return (
    <View {...{
      capitalizeFirstLetter,
      settingsParams,
      index,
      setIndex
    }} />
  );
};

export default ViewModel;