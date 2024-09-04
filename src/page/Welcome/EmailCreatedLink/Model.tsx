'use client'
import { useCallback, useMemo } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { WelcomeState } from '@/reducers/welcomeReducer';

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  resertNewLink: VoidFunction;
  sendLinkByEmail: VoidFunction;
  emailSendLink: string;
  isLinkPasswordOpen: boolean;
  createdLink: string;
  emailError: boolean;
  emailEmpty: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  resertNewLink,
  sendLinkByEmail,
  emailSendLink,
  isLinkPasswordOpen,
  createdLink,
  emailError,
  emailEmpty,
}) => {

  const regexEmail = useMemo(() => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, []);

  const onSendLinkByEmail = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault();
  
    if (emailSendLink.trim() === '') {
      changeWelcomePageFields({ emailEmpty: true, emailError: false });
    } else if (regexEmail.test(emailSendLink)) {
      sendLinkByEmail();
      changeWelcomePageFields({ emailError: false , emailEmpty : false });
    } else {
      changeWelcomePageFields({ emailError: true ,emailEmpty:false});
    }
  }, [regexEmail, emailSendLink, changeWelcomePageFields, sendLinkByEmail]);
  

  const onChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if(newValue.trim()!==""){
      changeWelcomePageFields({ emailEmpty: false });

    }
    if (regexEmail.test(newValue)) {
      changeWelcomePageFields({ emailError: false });
    }
    changeWelcomePageFields({ emailSendLink: newValue });
  }, [changeWelcomePageFields, regexEmail]);

  const removeEmailError = useCallback(() => {
    changeWelcomePageFields({ emailError: false });
  }, [changeWelcomePageFields]);

  const removeEmailEmpty = useCallback(() => {
    changeWelcomePageFields({ emailEmpty: false });
  }, [changeWelcomePageFields]);


  return (
    <View {...{
      onSendLinkByEmail,
      onChangeEmail,
      emailSendLink,
      resertNewLink,
      isLinkPasswordOpen,
      createdLink,
      emailError,
      removeEmailError,
      emailEmpty,
      removeEmailEmpty
    }} />
  );
};

export default ViewModel;