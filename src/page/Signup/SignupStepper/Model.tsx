'use client'
import { ReactNode, useCallback } from 'react';
import View from './View';
import { SignupStepEnum } from '@/enums/signupStep.enum';
import { Check } from '@mui/icons-material';

type Props = {

  currentStep:SignupStepEnum;
}

const ViewModel: React.FC<Props> = ({
  currentStep
}) => {
  
  const isValidStep = useCallback((step: SignupStepEnum): "outlined" | "solid" => {

    if (step === SignupStepEnum.USER_DETAILS) {
      return [SignupStepEnum.USER_DETAILS,SignupStepEnum.USER_PASSWORD].includes(currentStep as SignupStepEnum) ?
       "solid" : "outlined"
    }
    if (step === SignupStepEnum.USER_PASSWORD ) {
      return [SignupStepEnum.USER_PASSWORD].includes(currentStep as SignupStepEnum) ? "solid" : "outlined"
    }
    return "outlined"
  }, [currentStep])

  const isCheckStep = useCallback((step: SignupStepEnum): ReactNode => {
    if (step === SignupStepEnum.USER_DETAILS) {
      return [ SignupStepEnum.USER_PASSWORD].includes(currentStep as SignupStepEnum) ? <Check /> : "1";
    }
    if (step === SignupStepEnum.USER_PASSWORD ) {
      return [ SignupStepEnum.USER_DETAILS].includes(currentStep as SignupStepEnum) ? <Check /> : "2";
    }
 
    return null
  }, [currentStep])

  return (
    <View {...{
      currentStep,
      isValidStep,
      isCheckStep
    }}/>
  );
};

export default ViewModel;