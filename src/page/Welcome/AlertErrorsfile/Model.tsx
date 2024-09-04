'use client'
import { useCallback, useMemo } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { WelcomeState } from '@/reducers/welcomeReducer';
import humanFileSize from '@/utils/humanFileSize';

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  maxSizeError: boolean;

}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  maxSizeError,
}) => {

  const removeErrorSize = useCallback(() => {
    changeWelcomePageFields({ maxSizeError: false });
  }, [changeWelcomePageFields]);

  return (
    <View{...{
      removeErrorSize,
      maxSizeError,
    }} />
  );
};

export default ViewModel;