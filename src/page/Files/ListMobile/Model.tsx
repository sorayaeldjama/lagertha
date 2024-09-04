'use client'
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import View from './View';
import { LinksState } from '@/reducers/linksReducer';
import { MainState } from '@/reducers/mainReducer';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { useCallback, useEffect } from 'react';
import { FilesState } from '@/reducers/FilesReducer';
import { SettingsState } from '@/reducers/settingsReducer';

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  changeFilesPageFields: ReduxUniversalSetter<FilesState>;
  downloadFileLink: (file: FileMetaOutput)=>void
  files: FileMetaOutput[],
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;



}

const ViewModel: React.FC<Props> = ({
  changeFilesPageFields,
  downloadFileLink,
  changeSettingsPageFields,

  files,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
}) => {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  // const currentLanguageNow = localStorage.getItem('locale')

  // useEffect(() => {
  //   changeSettingsPageFields({ currentLanguage:currentLanguageNow  })

  // }, [currentLanguageNow])
  const change_page = useCallback((newPage: number) => {
    changeFilesPageFields({ page: newPage })
  }, [changeFilesPageFields])

  const onClickDeleteFile = useCallback((id: string) => {
    changeFilesPageFields({ fileId: id, isConfirmDeleteFile: true })
  }, [changeFilesPageFields])



  return (
    <View {...{
      files,
      pages_to_display,
      current_page,
      total_items,
      items_per_page,
      truncateString,
      onClickDeleteFile,
      change_page,
      downloadFileLink

    }} />
  );
};

export default ViewModel;