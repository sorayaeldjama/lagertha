'use client'
import { useCallback, useEffect } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { FilesState } from '@/reducers/FilesReducer';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  changeFilesPageFields: ReduxUniversalSetter<FilesState>;
  delete_file: VoidFunction;
  closeSnack: VoidFunction;
  isConfirmDeleteFile: boolean;
  isDeleted: boolean;
  isSnackOpen: boolean;
  snack: Snack | null
}

const ViewModel: React.FC<Props> = ({
  changeFilesPageFields,
  delete_file,
  closeSnack,
  isConfirmDeleteFile,
  isDeleted,
  isSnackOpen,
  snack
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    changeFilesPageFields({
      deleteFileSnackSuccess: t('Middlewares_Files_Delete_Snack_Success'),
      deleteFileSnackError: t('Middlewares_Files_Delete_Snack_Error')
    })
  }, [changeFilesPageFields])


  const onCloseSnackBar = useCallback(() => {
    changeFilesPageFields({ isDeleted: false, deleteFileSnackSuccess: t('Middlewares_Files_Delete_Snack_Success') })
  }, [changeFilesPageFields])

  const onCloseConfirmDeleteFile = useCallback(() => {
    changeFilesPageFields({ isConfirmDeleteFile: false })
  }, [changeFilesPageFields])

  const onAgreeDeleteFile = useCallback(() => {
    delete_file()
    changeFilesPageFields({ isConfirmDeleteFile: false })
  }, [changeFilesPageFields, delete_file])

  return (
    <View {...{
      isConfirmDeleteFile,
      onAgreeDeleteFile,
      isDeleted,
      onCloseSnackBar,
      onCloseConfirmDeleteFile,
      isSnackOpen,
      snack,
      closeSnack
    }} />
  );
};
export default ViewModel;