'use client'
import { useCallback, useEffect } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { LinksState } from '@/reducers/linksReducer';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  changeLinksPageFields: ReduxUniversalSetter<LinksState>;
  delete_link: VoidFunction;
  closeSnack: VoidFunction;
  isConfirmDeleteLink: boolean;
  isDeleted: boolean;
  isSnackOpen: boolean;
  snack: Snack | null

}
const ViewModel: React.FC<Props> = ({
  changeLinksPageFields,
  delete_link,
  closeSnack,
  isConfirmDeleteLink,
  isDeleted,
  isSnackOpen,
  snack
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    changeLinksPageFields({
      deleteLinkSnackSuccess: t('Middlewares_Links_Delete_Snack_Success'),
      deleteLinkSnakError: t('Middlewares_Links_Delete_Snack_Error')
    })
  })

  const onCloseSnackBar = useCallback(() => {
    changeLinksPageFields({ isDeleted: false })
  }, [changeLinksPageFields])

  const onCloseConfirmDeleteLink = useCallback(() => {
    changeLinksPageFields({ isConfirmDeleteLink: false })
  }, [changeLinksPageFields])

  const onAgreeDeleteLink = useCallback(() => {
    delete_link()
    changeLinksPageFields({ isConfirmDeleteLink: false })
  }, [changeLinksPageFields, delete_link])

  return (
    <View {...{
      isConfirmDeleteLink,
      onCloseConfirmDeleteLink,
      onAgreeDeleteLink,
      isDeleted,
      onCloseSnackBar,
      isSnackOpen,
      closeSnack,
      snack
    }} />
  );
};

export default ViewModel;