'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SignupState } from '@/reducers/signupReducer';
import { useCallback, useEffect, useMemo } from 'react';

type Props = {
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  signupEmail: string;
  signupFirstname: string;
  signupLastname: string;
  firstNameError: boolean;
  lastNameError: boolean;
  emailError: boolean;
  isSignupPasswordOpen: boolean;
  isSignUpError: boolean;
  isUserEmailAlreadyExit: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeSignupPageFields,
  signupEmail,
  signupFirstname,
  signupLastname,
  firstNameError,
  lastNameError,
  emailError,
  isSignupPasswordOpen,
  isSignUpError,
  isUserEmailAlreadyExit,
}) => {
  const regexEmail = useMemo(() => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, []);

  useEffect(() => {
    if (!isUserEmailAlreadyExit) {
      changeSignupPageFields({
        signupEmail: "",
        signupFirstname: "",
        signupLastname: ""
      })
    }
  }, [changeSignupPageFields])

  const onChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (isSignUpError && (newValue !== signupEmail)) {
      changeSignupPageFields({ isSignUpError: false });

    }
    if (regexEmail.test(newValue)) {
      changeSignupPageFields({ emailError: false });
    }
    changeSignupPageFields({ signupEmail: newValue });
    console.log("hello je suis dans le useeffect e de signup")
  }, [changeSignupPageFields, regexEmail, isSignUpError, signupEmail]);

  const onChangeFirstname = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (newValue.trim().length >= 2) {
      changeSignupPageFields({
        firstNameError: false,
      });
    }
    changeSignupPageFields({ signupFirstname: e.target.value })
  }, [changeSignupPageFields])

  const onChangeLastname = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    if (newValue.trim().length >= 2) {
      changeSignupPageFields({
        lastNameError: false,
      });
    }
    changeSignupPageFields({ signupLastname: e.target.value })
  }, [changeSignupPageFields])
  return (
    <View {...{
      signupEmail,
      signupFirstname,
      signupLastname,
      onChangeEmail,
      onChangeFirstname,
      onChangeLastname,
      firstNameError,
      lastNameError,
      emailError,
      isSignupPasswordOpen,
      isSignUpError
    }} />
  );
};

export default ViewModel;