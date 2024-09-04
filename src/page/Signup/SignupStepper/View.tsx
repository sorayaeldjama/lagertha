'use client'
import { Step, StepIndicator, Stepper } from '@mui/joy';
import styles from './styles.module.scss';
import { SignupStepEnum } from '@/enums/signupStep.enum';
import { ReactNode } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  currentStep: SignupStepEnum;
  isValidStep: (step: SignupStepEnum) => "solid" | "outlined";
  isCheckStep: (step: SignupStepEnum) => ReactNode;

}

const View: React.FC<Props> = ({
  currentStep,
  isValidStep,
  isCheckStep
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.stepper}>
      <Stepper size="sm">
        <Step
          indicator={
            <StepIndicator
              variant={isValidStep(SignupStepEnum.USER_DETAILS)}
              color="primary"
            >
              {isCheckStep(SignupStepEnum.USER_DETAILS)}
            </StepIndicator>
          }
          orientation="vertical"
        >
          {t('Signup_Stepper_Step1')}

        </Step>
        <Step
          indicator={
            <StepIndicator
              variant={isValidStep(SignupStepEnum.USER_PASSWORD)}
              color="primary"
            >
              {isCheckStep(SignupStepEnum.USER_PASSWORD)}
            </StepIndicator>
          }
          orientation="vertical"
        >
        {t('Signup_Stepper_Step2')}

        </Step>

      </Stepper>
    </div>
  );
};

export default View;