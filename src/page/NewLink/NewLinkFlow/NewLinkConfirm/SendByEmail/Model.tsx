'use client'
import { useCallback, useEffect, useMemo } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { NewLinkState } from '@/reducers/newLink';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
  sendNewLinkByEmail:VoidFunction;
  isSendByEmailOpen: boolean;
  closeSnack:VoidFunction;

  emailSendLink:string; 
  emailError:boolean;
  isSendByEmail:boolean;
  isLinkSended:boolean;
  snack:Snack | null

}

const ViewModel: React.FC<Props> = ({
  changeNewLinkPageFields,
  sendNewLinkByEmail,
  closeSnack,
  isSendByEmailOpen,
  emailSendLink,
  emailError,
  isSendByEmail,
  isLinkSended,
  snack
}) => {
  const regexEmail = useMemo(() => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, []);
  const { t } = useTranslation()

  useEffect(() => {
    changeNewLinkPageFields({
      snackCreateNewLinkSucces: t('Middlewares_New_Link_Send_Link_Snack_Success'),
      snackCreateNewLinkError: t('Middlewares_New_Link_Send_Link_Snack_Error')
    })
  }, [changeNewLinkPageFields])
  const onSendLinkByEmail = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (regexEmail.test(emailSendLink)) {
      changeNewLinkPageFields({ emailError: false ,isSendByEmail : true, emails: [emailSendLink] });
      sendNewLinkByEmail()
        } else {
      changeNewLinkPageFields({ emailError: true });
    }
  }, [regexEmail, emailSendLink, changeNewLinkPageFields, sendNewLinkByEmail]);

  const onChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (regexEmail.test(newValue)) {
      changeNewLinkPageFields({ emailError: false });
    }
    changeNewLinkPageFields({ emailSendLink: newValue });
  }, [changeNewLinkPageFields,regexEmail]);

  const removeEmailError = useCallback(() => {
    changeNewLinkPageFields({ emailError: false });
  }, [changeNewLinkPageFields]);
  
  const onCloseConfirmSendByEmail = useCallback(() => {
    changeNewLinkPageFields({ isSendByEmailOpen: false })
  }, [changeNewLinkPageFields])

  const onCloseSnackBar = useCallback(() => {
    changeNewLinkPageFields({ isSendByEmail: false })
  }, [changeNewLinkPageFields])

  // const onAgreeSendByEmail = useCallback(() => {
  //   changeNewLinkPageFields({ isSendByEmailOpen: false })
  // }, [changeNewLinkPageFields,])

  return (
    <View {...{
      isSendByEmailOpen,
      onCloseConfirmSendByEmail,
      // onAgreeSendByEmail,
      onSendLinkByEmail,
      emailSendLink,
      onChangeEmail,
      emailError,
      removeEmailError,
      isSendByEmail,
      onCloseSnackBar,
      isLinkSended,
      snack,
      closeSnack

    }} />
  );
};

export default ViewModel;