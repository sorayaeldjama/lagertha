'use client'
import {useEffect } from 'react';
import View from './View';
import { StepEnum } from '@/enums/steps.enum';
import { changeNewLinkPageFields } from '@/actions/newLink';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  newLinkName: string;
  isNewLinkNameOpen: boolean;
  isNewLinkPasswordOpen: boolean;
  isUploadFileOpen: boolean;
  isNewLinkDetailsOpen: boolean;
  currentStep: string
}
const ViewModel: React.FC<Props> = ({
  newLinkName,
  isNewLinkNameOpen,
  isNewLinkPasswordOpen,
  isUploadFileOpen,
  isNewLinkDetailsOpen,
  currentStep
}) => {

  useEffect(() => {
    changeNewLinkPageFields({
      currentStep: StepEnum.LINK_UPLOAD,
      isUploadFileOpen: true
    })

  }, [changeNewLinkPageFields])
  return (
    <View  {...{
      newLinkName,
      isNewLinkNameOpen,
      isNewLinkPasswordOpen,
      isUploadFileOpen,
      isNewLinkDetailsOpen,
      currentStep
    }} />
  );
};

export default ViewModel;