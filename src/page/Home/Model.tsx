'use client'
import { useCallback } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { AuthenticationState } from '@/reducers/authentication';
import { SignupState } from '@/reducers/signupReducer';

type Props = {
  changeAuthenticationPageFields: ReduxUniversalSetter<AuthenticationState>;
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  isLoginFormOpen: boolean;
  isSignUpFormOpen: boolean;
  loading: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeAuthenticationPageFields,
  changeSignupPageFields,
  isLoginFormOpen,
  isSignUpFormOpen,
  loading
}) => {
  const onClickLogIn = useCallback(() => {
    changeAuthenticationPageFields({ isLoginFormOpen: true })
    changeSignupPageFields({ isSignUpFormOpen: false })
  }, [])

  return (
    <View {...{
      isLoginFormOpen,
      isSignUpFormOpen,
      onClickLogIn,
      loading
    }} />
  );
};

export default ViewModel;