'use client'
import { useCallback, useEffect, useState } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { AuthenticationState } from '@/reducers/authentication';
import { SignupState } from '@/reducers/signupReducer';
import { useRouter } from "next/navigation";
import { Page } from '@/enums/pages.enum';
import { MainState } from '@/reducers/mainReducer';

type Props = {
  changeAuthenticationPageFields: ReduxUniversalSetter<AuthenticationState>;
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  submitSignupForm: VoidFunction;
  submitLogInForm: (login: string, password: string) => void;
  isLoginFormOpen: boolean;
  isSignUpFormOpen: boolean;
  // appUuid: string;
  // loginPassword: string;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupLogin: string;
  signupApplicationUuid: string;
  logInLogin: string;
  logInPassword: string;
  // login: string;
  isLogged: boolean;
  loading: boolean;
  // loadinLoginForm: boolean;
  // isTransferHomeOpen: boolean;
  isSideBarOpen: boolean;
  is_otp_need: boolean;
  totp_code: string;
}
const ViewModel: React.FC<Props> = ({
  changeAuthenticationPageFields,
  changeMainPageFields,
  changeSignupPageFields,
  submitSignupForm,
  submitLogInForm,
  isLoginFormOpen,
  isSignUpFormOpen,
  // appUuid,
  // loginPassword,
  signupEmail,
  signupPassword,
  signupConfirmPassword,
  signupFirstname,
  signupLastname,
  signupLogin,
  signupApplicationUuid,
  logInLogin,
  logInPassword,
  // login,
  isLogged,
  loading,
  // loadinLoginForm,
  // isTransferHomeOpen,
  isSideBarOpen,
  is_otp_need,
  totp_code
}) => {
  const [appUuidError, setAppUuidError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)
  const appUuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push(Page.TRANSFER);
    }
  }, [isLogged, router]);

  useEffect(() => {
    changeMainPageFields({ isLoginFormOpen: true })
  }, [changeMainPageFields])

  const isAppUuidValid = (appUuid: string) => {
    return appUuidRegex.test(appUuid);
  };
  const isPasswordValid = (password: string) => {
    return passwordRegex.test(password);
  };
  // useEffect(()=>{
  //     changeAuthenticationPageFields({isLoginFormOpen:true})
  // },[])
  // const onClickLogIn = useCallback(() => {
  //   changeAuthenticationPageFields({ isLoginFormOpen: true })
  //   changeSignupPageFields({ isSignUpFormOpen: false })
  //   console.log("hello", isLoginFormOpen)
  // }, [])

  // const onClickSignUp = useCallback(() => {
  //   changeAuthenticationPageFields({ isLoginFormOpen: false })
  //   changeSignupPageFields({ isSignUpFormOpen: true })

  // }, [])

  // const onSubmitSignUpForm = useCallback(() => {
  //   // changeAuthenticationPageFields({ isLoginFormOpen: false, isSignUpFormOpen: true })
  //   submitSignupForm()
  // }, [])

  const onSubmitLogInForm = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    submitLogInForm(logInLogin, logInPassword)
  }, [logInLogin, logInPassword, submitLogInForm])

  const onChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    changeSignupPageFields({ signupEmail: newValue })
  }, [])

  const onChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    if (isPasswordValid(newValue)) {
      setPasswordError(false)
    }
    changeSignupPageFields({ signupPassword: newValue })
  }, [])

  const onChangeConfirmPassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    if (newValue === signupPassword && signupPassword.trim() != '') {
      setConfirmPasswordError(false)
    }
    changeSignupPageFields({ signupConfirmPassword: newValue })
  }, [])

  const onChangeFirstname = useCallback((e: React.BaseSyntheticEvent) => {
    changeSignupPageFields({ signupFirstname: e.target.value })
  }, [])

  const onChangeLastname = useCallback((e: React.BaseSyntheticEvent) => {
    changeSignupPageFields({ signupLastname: e.target.value })
  }, [])

  const onChangeLogin = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value

    changeSignupPageFields({ signupLogin: newValue })
  }, [])

  const onChangeLogInEmail = useCallback((e: React.BaseSyntheticEvent) => {
    changeAuthenticationPageFields({ logInLogin: e.target.value })
  }, [])

  const onChangeLogInPassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    changeAuthenticationPageFields({ logInPassword: newValue })
  }, [])

  const onChangeTotp = useCallback((e: React.BaseSyntheticEvent) => {
    if (/^[0-9]{0,6}$/.test(e.target.value)) {

      changeAuthenticationPageFields({ totp_code: e.target.value })
    }
  }, [])
  return (
    <View  {...{
      isLoginFormOpen,
      isSignUpFormOpen,

      signupEmail,
      signupPassword,
      signupConfirmPassword,
      signupFirstname,
      signupLastname,
      signupLogin,
      signupApplicationUuid,
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      onChangeFirstname,
      onChangeLastname,
      onChangeLogin,
      logInLogin,
      logInPassword,
      onSubmitLogInForm,
      onChangeLogInEmail,
      onChangeLogInPassword,
      loading,
      isSideBarOpen,
      is_otp_need,
      totp_code,
      onChangeTotp
    }} />
  );
};

export default ViewModel;