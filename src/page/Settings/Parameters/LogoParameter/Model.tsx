'use client'
import { useCallback } from 'react';
import View from './View';
import { SettingsState } from '@/reducers/settingsReducer';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;

  selectedLogo:File |null ; 
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  selectedLogo
}) => {
  
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        changeSettingsPageFields({selectedLogo : files[0]})
        // const newList = [...selectedFiles, files[0]]
        // changeNewLinkPageFields({ selectedFiles: newList, uploadFileError: false });
      }
    }, [
      changeSettingsPageFields, 
    ]);

  const OnClickDeleteFile = useCallback(
    (index: number) => {
      // const updatedSelectedFiles = selectedFiles?.filter((_, i) => i !== index);
      // changeNewLinkPageFields({ selectedFiles: updatedSelectedFiles });
    }, [
      // changeNewLinkPageFields, selectedFiles
    ]);

  return (
    <View {...{
      handleFileChange,
      OnClickDeleteFile,
      selectedLogo

    }}/>
  );
};

export default ViewModel;