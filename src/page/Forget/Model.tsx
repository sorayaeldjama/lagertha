"use client";
import { useCallback, useEffect, useState } from "react";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { AuthenticationState } from "@/reducers/authentication";
import { SignupState } from "@/reducers/signupReducer";
import { useRouter } from "next/navigation";
import { Page } from "@/enums/pages.enum";
import { MainState } from "@/reducers/mainReducer";
import { ForgetStep } from "@/enums/forgetStep.enum";
import { ForgetState } from "@/reducers/forgetReducer";

type Props = {
  step: ForgetStep;
  login: string;
  changeForgetPageFields: ReduxUniversalSetter<ForgetState>;
  getResetCode: VoidFunction;
  loaderStart: boolean;
  code: string;
  validateCode: VoidFunction;
  newPassword: string;
  newConfirmPassword: string;
  reinitPassword: VoidFunction;
  errorNewPassword: boolean;
  isLogged: boolean;
  is_otp_need: boolean;
  otp_code: string;
};
const ViewModel: React.FC<Props> = ({
  step,
  login,
  changeForgetPageFields,
  getResetCode,
  loaderStart,
  code,
  validateCode,
  newPassword,
  newConfirmPassword,
  errorNewPassword,
  reinitPassword,
  isLogged,
  is_otp_need,
  otp_code,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push(Page.TRANSFER);
    }
  }, [isLogged]);

  const changeLogin = useCallback((e: React.BaseSyntheticEvent) => {
    changeForgetPageFields({
      login: e.target.value,
    });
  }, []);

  const changeCode = useCallback((e: React.BaseSyntheticEvent) => {
    changeForgetPageFields({
      code: e.target.value,
    });
  }, []);

  const changeNewPassword = useCallback((e: React.BaseSyntheticEvent) => {
    changeForgetPageFields({
      errorNewPassword:
        e.target.value.length < 8 ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(e.target.value),
    });
    changeForgetPageFields({
      newPassword: e.target.value,
    });
  }, []);

  const changeNewConfirmPassword = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeForgetPageFields({
        newConfirmPassword: e.target.value,
      });
    },
    []
  );

  const submitReinit = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      let error = false;
      if (newConfirmPassword !== newPassword) {
        error = true;
      }
      if (
        newPassword.length < 8 ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(newPassword)
      ) {
        error = true;
      }

      if (!error) {
        reinitPassword();
      }
    },
    [newConfirmPassword, newPassword]
  );

  const changeOtpCode = useCallback(
    (e: React.BaseSyntheticEvent) => {
      if (/^[0-9]{0,6}$/.test(e.target.value)) {
        changeForgetPageFields({
          otp_code: e.target.value,
        });
      }
    },
    []
  );

  return (
    <View
      {...{
        step,
        login,
        changeLogin,
        getResetCode,
        loaderStart,
        code,
        changeCode,
        validateCode,
        newPassword,
        newConfirmPassword,
        changeNewPassword,
        changeNewConfirmPassword,
        errorNewPassword,
        submitReinit,
        is_otp_need,
        otp_code,
        changeOtpCode
      }}
    />
  );
};

export default ViewModel;
