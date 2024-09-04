'use client'
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import View from './View';
import { useCallback } from 'react';
import { Page } from '@/enums/pages.enum';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { useRouter } from 'next/navigation';

type Props = {
  changeWelcomePageFields:ReduxUniversalSetter<WelcomeState>;

  currentLink: LinkOutput;
  downloadFile: (file: FileMetaOutput) => void;
  downloading: boolean;
  downloadAllFiles: VoidFunction
}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  currentLink,
  downloadFile,
  downloading,
  downloadAllFiles,
}) => {


  return (
    <View {...{
      currentLink,
      downloadFile,
      downloading,
      downloadAllFiles,

    }} />
  );
};

export default ViewModel;