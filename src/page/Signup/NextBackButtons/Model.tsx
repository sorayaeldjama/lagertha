'use client'
import { useCallback, useMemo } from 'react';
import View from './View';
import { SignupStepEnum } from '@/enums/signupStep.enum';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { SignupState } from '@/reducers/signupReducer';
import { useRouter } from 'next/navigation';
import { Page } from '@/enums/pages.enum';
import { passwordStepVerifications } from './verificationsSignupPassword/passwordStepVerifications';
import { confirmPasswordStepVerifications } from './verificationsSignupPassword/confirmPasswordStepVerifications';

type Props = {
  changeSignupPageFields: ReduxUniversalSetter<SignupState>;
  currentStep: SignupStepEnum;
  signupPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupEmail: string;
  signupConfirmPassword: string;
  isSignUpError:boolean;
}

const ViewModel: React.FC<Props> = ({
  changeSignupPageFields,
  currentStep,
  signupPassword,
  signupFirstname,
  signupLastname,
  signupEmail,
  signupConfirmPassword,
  isSignUpError
}) => {

  const router = useRouter();
  const regexEmail = useMemo(() => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, []);

  const back_disable = useMemo(() => {
    switch (currentStep) {
      case SignupStepEnum.USER_DETAILS:
        return true
      default:
        return false
    }
  }, [currentStep])
  const onClickNext = useCallback((e: React.BaseSyntheticEvent) => {
    switch (currentStep) {
      case SignupStepEnum.USER_DETAILS:
        let error = false;
        if (!regexEmail.test(signupEmail) || isSignUpError
        ) {
          error = true;
          changeSignupPageFields({
            emailError: true,
          });
        }
        if (signupFirstname.length < 2) {
          error = true;
          changeSignupPageFields({
            firstNameError: true,
          });
        }
        if (signupLastname.length < 2) {
          error = true;
          changeSignupPageFields({
            lastNameError: true,
          });
        }
        if (!error) {
          changeSignupPageFields({
            currentStep: SignupStepEnum.USER_PASSWORD,

            isSignupPasswordOpen: true
          });
          // router.push(Page.SIGNUP_PASSWORD);
        }

        break;
      case SignupStepEnum.USER_PASSWORD:
        if (passwordStepVerifications(signupPassword, changeSignupPageFields)
          && confirmPasswordStepVerifications(signupPassword, signupConfirmPassword, changeSignupPageFields)

        ) {
          // createFile();
          // changeSignupPageFields({
          //   currentStep: StepEnum.LINK_DETAILS,
          //   isNewLinkDetailsOpen: true,
          //   errorPassword: false
          // });
        } else {
          // changeNewLinkPageFields({
          //   currentStep: StepEnum.LINK_PASSWORD,
          //   isNewLinkPasswordOpen: true,
          //   isNewLinkDetailsOpen: false,
          // });
        }
        break;
      default:
        break;
    }
  }, [currentStep,
    regexEmail,
    signupEmail,
    signupFirstname,
    signupLastname,
    changeSignupPageFields]);

  const onClickBack = useCallback((e: React.BaseSyntheticEvent) => {
    switch (currentStep) {
      case SignupStepEnum.USER_PASSWORD:
        changeSignupPageFields({
          currentStep: SignupStepEnum.USER_DETAILS,
          isSignupPasswordOpen: false,
          isSignupDetailsOpen: true,
        });
        break;
    }
  }, [currentStep,
    SignupStepEnum,
    changeSignupPageFields]);

  return (
    <View {...{
      onClickNext,
      onClickBack,
      back_disable
    }} />
  );
};

export default ViewModel;