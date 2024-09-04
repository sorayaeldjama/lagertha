'use client'
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import View from './View';

type Props = {
  downloadFile: (file: FileMetaOutput) => void;
  downloadAllFiles: VoidFunction
  currentLink: LinkOutput;

}

const ViewModel: React.FC<Props> = ({
  currentLink,
  downloadFile,
downloadAllFiles
}) => {

  return (
    <View {...{
      currentLink,
      downloadFile,
      downloadAllFiles


    }} />
  );
};

export default ViewModel;