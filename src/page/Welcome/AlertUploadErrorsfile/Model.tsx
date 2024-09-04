'use client'
import { useCallback, useMemo } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { WelcomeState } from '@/reducers/welcomeReducer';
import humanFileSize from '@/utils/humanFileSize';

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  uploadFileError:boolean;
  maxSizeError: boolean;


}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  uploadFileError,
  maxSizeError,

}) => {

  const removeErrorUpload = useCallback(() => {
    changeWelcomePageFields({ uploadFileError: false });
  }, [changeWelcomePageFields]);

  return (
    <View{...{
      removeErrorUpload,
      uploadFileError,
      maxSizeError
    }} />
  );
};

export default ViewModel;