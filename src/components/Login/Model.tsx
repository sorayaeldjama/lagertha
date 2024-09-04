"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { AuthenticationState } from "@/reducers/authentication";
import { SignupState } from "@/reducers/signupReducer";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Page } from "@/enums/pages.enum";

type Props = {
  changeAuthenticationPageFields: ReduxUniversalSetter<AuthenticationState>;
  changeMainPageFields: ReduxUniversalSetter<AuthenticationState>;
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  submitLogInForm: (login: string, password: string) => void;
  isLoginFormOpen: boolean;
  appUuid: string;
  logInLogin: string;
  logInPassword: string;
  isLogged: boolean;
  loading: boolean;
  loadinLoginForm: boolean;
  isSideBarOpen: boolean;

};

const ViewModel: React.FC<Props> = ({
  changeAuthenticationPageFields,
  submitLogInForm,
  isLoginFormOpen,
  appUuid,
  logInLogin,
  logInPassword,
  isLogged,
  loading,
  loadinLoginForm,
  isSideBarOpen,
}) => {
  const router = useRouter();

  useEffect(() => {
    router.push(Page.TRANSFER);
  }, [isLogged, router]);

  const onSubmitLogInForm = useCallback(() => {
    submitLogInForm(logInLogin, logInPassword);
  }, []);

  const onChangeLogInEmail = useCallback((e: React.BaseSyntheticEvent) => {
    changeAuthenticationPageFields({ logInLogin: e.target.value });
  }, []);

  const onChangeLogInPassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    changeAuthenticationPageFields({ logInPassword: newValue });
  }, []);
  return (
    <View
      {...{
        isLoginFormOpen,
        onSubmitLogInForm,
        onChangeLogInEmail,
        onChangeLogInPassword,
        appUuid,
        logInLogin,
        logInPassword,
        loading,
        loadinLoginForm,
        isSideBarOpen,
      }}
    />
  );
};

export default ViewModel;
