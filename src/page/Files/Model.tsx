'use client'
import { useCallback, useEffect } from 'react';
import View from './View';
import { useRouter } from 'next/navigation';
import { Page } from '@/enums/pages.enum';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { MainState } from '@/reducers/mainReducer';
import { FilesState } from '@/reducers/FilesReducer';
import { FileMetaOutput } from '@/services/openapi';
import { Snack } from '@/types/snack';

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeFilesPageFields: ReduxUniversalSetter<FilesState>;
  downloadFileLink: (file: FileMetaOutput) => void;
  closeSnack: VoidFunction;
  get_files: VoidFunction;
  files: FileMetaOutput[],
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;
  isLogged: boolean;
  downloading: boolean;
  snack: Snack | null;
}
const ViewModel: React.FC<Props> = ({
  changeMainPageFields,
  changeFilesPageFields,
  downloadFileLink,
  closeSnack,
  get_files,
  files,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
  isLogged,
  downloading,
  snack,
}) => {
  const router = useRouter();

  useEffect(() => {
    get_files()
  }, [current_page, get_files])

  useEffect(() => {
    if (!isLogged) {
      changeMainPageFields({ isSideBarOpen: true });

      router.push(Page.HOME);
    }
  }, [isLogged, router]);

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const change_page = useCallback((newPage: number) => {
    changeFilesPageFields({ page: newPage })
  }, [changeFilesPageFields])

  const onClickDeleteFile = useCallback((id: string) => {
    changeFilesPageFields({ fileId: id, isConfirmDeleteFile: true })
  }, [changeFilesPageFields])

  const onCloseSnackBar = useCallback(() => {
    changeFilesPageFields({ isDeleted: false })
  }, [changeFilesPageFields])

  return (
    <View  {...{
      truncateString,
      pages_to_display,
      current_page,
      change_page,
      total_items,
      items_per_page,
      files,
      onClickDeleteFile,
      downloadFileLink,
      downloading,
      snack,
      closeSnack,
      onCloseSnackBar
    }} />
  );
};

export default ViewModel;