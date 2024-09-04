'use client'
import { useCallback, useEffect } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { MainState } from '@/reducers/mainReducer';
import { Page } from '@/enums/pages.enum';
import { useRouter } from 'next/navigation';
import { ContactState } from '@/reducers/contactReducer';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';
import { SettingsState } from '@/reducers/settingsReducer';

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeContactPageFields: ReduxUniversalSetter<ContactState>;
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;

  send_message: VoidFunction;
  closeSnack: VoidFunction;
  isConfirmSendMessage: boolean;
  isLogged: boolean;
  subject: string;
  message: string;
  isSendMessage: boolean;
  snack: Snack | null;
  subjectEmptyError: boolean;
  messageEmptyError: boolean;

}

const ViewModel: React.FC<Props> = ({
  changeMainPageFields,
  changeContactPageFields,
  changeSettingsPageFields,
  send_message,
  closeSnack,
  isConfirmSendMessage,
  isLogged,
  subject,
  message,
  isSendMessage,
  snack,
  subjectEmptyError,
  messageEmptyError
}) => {

  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    changeContactPageFields({
      sendContactSnackSucces: t('Middlewares_Contact_Send_Snack_Success'),
      sendContactSnackError: t('Middlewares_Contact_Send_Snack_Error'),
      subjectEmptyError: false,
      messageEmptyError: false,
      message:"",
      subject:""
    })

  }, [changeContactPageFields])

  useEffect(() => {
    if (!isLogged) {
      changeMainPageFields({ isSideBarOpen: true });

      router.push(Page.HOME);
    }
  }, [isLogged, router]);

  // useEffect(() => {

  //   changeContactPageFields({
  //     message: "",
  //     subject: "",
  //     isSendMessage: false,
  //     // isConfirmSendMessage: false
  //   })

  // }, [changeContactPageFields]);


  const onSendContactMessage = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    let error = false;

    if (message.trim() === "") {
      error = true;
      changeContactPageFields({ messageEmptyError: true });
    }
    if (subject.trim() === "") {
      error = true;
      changeContactPageFields({ subjectEmptyError: true });
    }
    if (!error) {
      send_message();
    }
  }, [changeContactPageFields, message, subject]);


  const onChangeMessage = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (newValue.trim() !== "") {
      changeContactPageFields({ messageEmptyError: false })

    }
    changeContactPageFields({ message: newValue })

  }, [changeContactPageFields])

  const onChangeObject = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (newValue.trim() !== "") {
      changeContactPageFields({ subjectEmptyError: false })

    }
    changeContactPageFields({ subject: newValue })

  }, [changeContactPageFields])

  const onCloseSnackBar = useCallback(() => {
    changeContactPageFields({ isSendMessage: false })
  }, [changeContactPageFields])

  // const onCloseConfirmSendMessage = useCallback(() => {
  //   changeContactPageFields({ isConfirmSendMessage: false })
  // }, [changeContactPageFields])

  // const onAgreeSendMessage = useCallback(() => {
  //   send_message()
  //   // changeContactPageFields({ isConfirmSendMessage: false })
  // }, [changeContactPageFields, send_message()
  // ])

  return (
    <View {...{
      // onCloseConfirmSendMessage,
      // onAgreeSendMessage,
      onSendContactMessage,
      onChangeMessage,
      onChangeObject,
      subject,
      message,
      isSendMessage,
      onCloseSnackBar,
      isConfirmSendMessage,
      snack,
      closeSnack,
      subjectEmptyError,
      messageEmptyError
    }} />
  );
};

export default ViewModel;
