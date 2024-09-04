"use client";

import { StepEnum } from "@/enums/steps.enum";
import styles from "./styles.module.scss";
import { Box, Step, StepIndicator, Stepper } from "@mui/joy";
import Check from "@mui/icons-material/Check";
import { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  currentStep: String;
  isValidStep: (step: StepEnum) => "solid" | "outlined";
  isCheckStep: (step: StepEnum) => ReactNode;
};
const View: React.FC<Props> = ({ currentStep, isValidStep, isCheckStep }) => {
  const { t } = useTranslation()
  return (
    <Box className={styles.stepper}>
      <Stepper size="sm">
        <Step
          indicator={
            <StepIndicator
              variant={isValidStep(StepEnum.LINK_UPLOAD)}
              color="primary"
            >
              {isCheckStep(StepEnum.LINK_UPLOAD)}
            </StepIndicator>
          }
          orientation="vertical"
        >
          {t('new_link_stepper_upload_files')}

        </Step>
        <Step
          indicator={
            <StepIndicator
              variant={isValidStep(StepEnum.LINK_NAME)}
              color="primary"
            >
              {isCheckStep(StepEnum.LINK_NAME)}
            </StepIndicator>
          }
          orientation="vertical"
        >
          {t('new_link_stepper_Link options')}
        </Step>
        <Step
          indicator={
            <StepIndicator
              variant={isValidStep(StepEnum.LINK_DETAILS)}
              color="primary"
            >
              {StepEnum.LINK_DETAILS}
            </StepIndicator>
          }
          orientation="vertical"
        >
          {t('new_link_stepper_Link details')}

        </Step>
      </Stepper>
    </Box>
  );
};
export default View;
