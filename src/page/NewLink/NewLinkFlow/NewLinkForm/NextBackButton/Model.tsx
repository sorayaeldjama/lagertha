"use client";
import { useCallback, useMemo, useState } from "react";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { NewLinkState } from "@/reducers/newLink";
import { StepEnum } from "@/enums/steps.enum";
import { passwordStepVerifications } from "./verificationsNewLinkPassword/passwordStepVerifications";
import { confirmPasswordStepVerifications } from "./verificationsNewLinkPassword/confirmPasswordStepVerifications";
import { isLinkNameValid } from "./verificationLinkName/isLinkNameValid";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
  createFile: VoidFunction;
  currentStep: StepEnum;
  noPassword: boolean;
  confirmPassword: string;
  password: string;
  selectedFiles: File[];
  newLinkName: string;
};
const ViewModel: React.FC<Props> = ({
  changeNewLinkPageFields,
  createFile,
  currentStep,
  noPassword,
  password,
  confirmPassword,
  selectedFiles,
  newLinkName,
}) => {
  const [nextButton, setNextButton] = useState<boolean>(true);
  const { t } = useTranslation()

  {t('new_link_Back_Button')}

  const next_text = useMemo(() => {
    switch (currentStep) {
      case StepEnum.LINK_NAME:
        return   t('new_link_Next_Text1_Button')
        ;
      default:
        return  t('new_link_Next_Text2_Button');
    }
  }, [currentStep]);

  const next_disable = useMemo(() => {
    switch (currentStep) {
      default:
        return false;
    }
  }, [currentStep]);

  const back_disable = useMemo(() => {
    switch (currentStep) {
      case StepEnum.LINK_UPLOAD:
        return true;
      default:
        return false;
    }
  }, [currentStep]);

  const onClickNext = useCallback(
    (e: React.BaseSyntheticEvent) => {
      switch (currentStep) {
        case StepEnum.LINK_UPLOAD:
          let error = false;
          if (!selectedFiles[0]) {
            error = true;
            changeNewLinkPageFields({
              currentStep: StepEnum.LINK_UPLOAD,
              isUploadFileOpen: true,
              errorFile: true,
              uploadFileError: true,
              isNewLinkNameOpen: false,
            });
          }
          if (!error) {
            changeNewLinkPageFields({
              currentStep: StepEnum.LINK_NAME,
              isNewLinkNameOpen: true,
              isUploadFileOpen: false,
              uploadFileError: false,
            });
          }
          break;
        case StepEnum.LINK_NAME:
          if (!isLinkNameValid(newLinkName, changeNewLinkPageFields)) {
            changeNewLinkPageFields({
              currentStep: StepEnum.LINK_NAME,
              isNewLinkNameOpen: true,
              isNewLinkPasswordOpen: false,
            });
          } else {
            createFile();
            changeNewLinkPageFields({
              currentStep: StepEnum.LINK_DETAILS,
              isNewLinkNameOpen: false,
              isNewLinkPasswordOpen: false,
              linkNameError: false,
              isNewLinkDetailsOpen: true,
            });
          }
          break;
        default:
          break;
      }
    },
    [
      changeNewLinkPageFields,
      createFile,
      currentStep,
      selectedFiles,
      newLinkName,
    ]
  );

  const onClickBack = useCallback(
    (e: React.BaseSyntheticEvent) => {
      switch (currentStep) {
        case StepEnum.LINK_NAME:
          changeNewLinkPageFields({
            currentStep: StepEnum.LINK_UPLOAD,
            isNewLinkNameOpen: false,
            isUploadFileOpen: true,
          });
          break;
        case StepEnum.LINK_DETAILS:
          changeNewLinkPageFields({
            currentStep: StepEnum.LINK_NAME,
            isNewLinkDetailsOpen: false,
            isNewLinkNameOpen: true,
            isUploadFileOpen: false,
          });
          break;
      }
    },
    [changeNewLinkPageFields, currentStep]
  );

  return (
    <View
      {...{
        onClickNext,
        onClickBack,
        currentStep,
        nextButton,
        next_text,
        back_disable,
        newLinkName,
      }}
    />
  );
};
export default ViewModel;
