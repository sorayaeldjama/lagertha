'use client'
import { useCallback, useEffect, } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { MainState } from '@/reducers/mainReducer';
import { NewLinkState } from '@/reducers/newLink';
import { StepEnum } from '@/enums/steps.enum';

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
  selectedFiles: File[];
  uploadFileError:boolean;
}

const ViewModel: React.FC<Props> = ({
  changeMainPageFields,
  changeNewLinkPageFields,
  selectedFiles,
  uploadFileError
}) => {

  useEffect(() => {
    changeNewLinkPageFields({
      currentStep: StepEnum.LINK_UPLOAD,
    })
  }, [changeNewLinkPageFields])

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const newList = [...selectedFiles, files[0]]
        changeNewLinkPageFields({ selectedFiles: newList, uploadFileError: false });
      }
    }, [changeNewLinkPageFields, selectedFiles]);

  const OnClickDeleteFile = useCallback(
    (index: number) => {
      const updatedSelectedFiles = selectedFiles?.filter((_, i) => i !== index);
      changeNewLinkPageFields({ selectedFiles: updatedSelectedFiles });
    }, [changeNewLinkPageFields, selectedFiles]);

  return (
    <View {...{
      handleFileChange,
      selectedFiles,
      OnClickDeleteFile,
      uploadFileError
    }} />
  );
};

export default ViewModel;