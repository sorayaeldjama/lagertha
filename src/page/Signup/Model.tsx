'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SignupState } from '@/reducers/signupReducer';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Page } from '@/enums/pages.enum';
import { SignupStepEnum } from '@/enums/signupStep.enum';
import { passwordStepVerifications } from './NextBackButtons/verificationsSignupPassword/passwordStepVerifications';
import { confirmPasswordStepVerifications } from './NextBackButtons/verificationsSignupPassword/confirmPasswordStepVerifications';

type Props = {
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  submitSignupForm: VoidFunction;
  submitLogInForm: (login: string, password: string) => void;
  loading: boolean;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupLogin: string;
  signupApplicationUuid: string;
  firstNameError: boolean;
  lastNameError: boolean;
  confirmPasswordError: boolean;
  passwordError: boolean;
  emailError: boolean;
  isLogged: boolean,
  isSignupPasswordOpen: boolean;
  isSignupDetailsOpen: boolean;
  currentStep: SignupStepEnum;
}

const ViewModel: React.FC<Props> = ({
  changeSignupPageFields,
  submitSignupForm,
  submitLogInForm,
  loading,
  signupEmail,
  signupPassword,
  signupConfirmPassword,
  signupFirstname,
  signupLastname,
  signupLogin,
  signupApplicationUuid,
  firstNameError,
  lastNameError,
  confirmPasswordError,
  passwordError,
  emailError,
  isLogged,
  isSignupPasswordOpen,
  isSignupDetailsOpen,
  currentStep
}) => {

  const [appUuidError, setAppUuidError] = useState<boolean>(false)
  const appUuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/

  const regexEmail = useMemo(() => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, []);
  const router = useRouter();

  useEffect(() => {
    changeSignupPageFields({
      loading: false,
      // signupEmail: "",
      // signupFirstname: "",
      // signupPassword: "",
      // signupConfirmPassword: "",
      // signupLastname: "",
      passwordError: false,
      emailError: false,
      firstNameError: false,
      lastNameError: false,
      confirmPasswordError: false
    })
    if (isLogged) {
      router.push(Page.TRANSFER);
    }
  }, [changeSignupPageFields, isLogged])

  const isPasswordValid = (password: string) => {
    return passwordRegex.test(password);
  };

  const onSubmitSignUpForm = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (passwordStepVerifications(signupPassword, changeSignupPageFields)
      && confirmPasswordStepVerifications(signupPassword, signupConfirmPassword,
        changeSignupPageFields)
    ) {
      submitSignupForm()
      changeSignupPageFields({
        passwordError: false,
        confirmPasswordError: false
      });
    } else {
      changeSignupPageFields({
        isSignupPasswordOpen: true,
      });
    }
  }, [submitSignupForm,
    signupPassword,
    signupConfirmPassword,
    changeSignupPageFields,
    passwordStepVerifications,
    changeSignupPageFields,
    confirmPasswordStepVerifications,
  ])

  const onChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    if (isPasswordValid(newValue)) {
      changeSignupPageFields({ passwordError: false })
    }
    changeSignupPageFields({ signupPassword: newValue })
  }, [changeSignupPageFields, isPasswordValid])

  const onChangeConfirmPassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    if (newValue === signupPassword && signupPassword.trim() != '') {
      changeSignupPageFields({ confirmPasswordError: false })
    }
    changeSignupPageFields({ signupConfirmPassword: newValue })
  }, [changeSignupPageFields, signupPassword])

  const onChangeLogin = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    changeSignupPageFields({ signupLogin: newValue })
  }, [changeSignupPageFields])

  return (
    <View {...{
      loading,
      signupEmail,
      signupPassword,
      signupConfirmPassword,
      signupFirstname,
      signupLastname,
      signupLogin,
      signupApplicationUuid,
      // onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      // onChangeFirstname,
      // onChangeLastname,
      onChangeLogin,
      onSubmitSignUpForm,
      passwordError,
      firstNameError,
      lastNameError,
      confirmPasswordError,
      isSignupPasswordOpen,
      isSignupDetailsOpen,
      currentStep

    }} />
  );
};

export default ViewModel;