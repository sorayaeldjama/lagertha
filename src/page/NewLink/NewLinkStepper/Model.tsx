"use client";
import { ReactNode, useCallback, useState } from "react";
import View from "./View";
import { StepEnum } from "@/enums/steps.enum";
import Check from "@mui/icons-material/Check";

type Props = {
  currentStep: string;
};

const ViewModel: React.FC<Props> = ({ currentStep }) => {
  const isValidStep = useCallback(
    (step: StepEnum): "outlined" | "solid" => {
      if (step === StepEnum.LINK_UPLOAD) {
        return [
          StepEnum.LINK_UPLOAD,
          StepEnum.LINK_NAME,
          StepEnum.LINK_DETAILS,
        ].includes(currentStep as StepEnum)
          ? "solid"
          : "outlined";
      }
      if (step === StepEnum.LINK_NAME) {
        return [StepEnum.LINK_NAME, StepEnum.LINK_DETAILS].includes(
          currentStep as StepEnum
        )
          ? "solid"
          : "outlined";
      }
      if (step === StepEnum.LINK_DETAILS) {
        return [StepEnum.LINK_DETAILS].includes(currentStep as StepEnum)
          ? "solid"
          : "outlined";
      }
      return "outlined";
    },
    [currentStep]
  );

  const isCheckStep = useCallback(
    (step: StepEnum): ReactNode => {
      if (step === StepEnum.LINK_UPLOAD) {
        return [StepEnum.LINK_NAME, StepEnum.LINK_DETAILS].includes(
          currentStep as StepEnum
        ) ? (
          <Check />
        ) : (
          "1"
        );
      }
      if (step === StepEnum.LINK_NAME && StepEnum.LINK_UPLOAD) {
        return [StepEnum.LINK_DETAILS].includes(currentStep as StepEnum) ? (
          <Check />
        ) : (
          "2"
        );
      }
      return null;
    },
    [currentStep]
  );

  return (
    <View
      {...{
        currentStep,
        isValidStep,
        isCheckStep,
      }}
    />
  );
};
export default ViewModel;
