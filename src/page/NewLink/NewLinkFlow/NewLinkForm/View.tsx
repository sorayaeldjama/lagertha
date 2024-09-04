'use client'

import styles from './styles.module.scss';
import NewLinkPassword from './NewLinkPassword';
import NewLinkUploadFile from './NewLinkUploadFile';
import NewLinkName from './NewLinkName';
import { StepEnum } from '@/enums/steps.enum';
import NextBackButton from './NextBackButton';

type Props = {
  isNewLinkNameOpen: boolean;
  isNewLinkPasswordOpen: boolean;
  isUploadFileOpen: boolean;
  currentStep: string;
}
const View: React.FC<Props> = ({
  isNewLinkNameOpen,
  isNewLinkPasswordOpen,
  isUploadFileOpen,
  currentStep,
}) => {

  return (
    <>
      <div className={styles.form}>
        <div className={styles.newlinkform} >
          {isUploadFileOpen && currentStep === StepEnum.LINK_UPLOAD && (
            <NewLinkUploadFile />
          )}
          {isNewLinkNameOpen && currentStep === StepEnum.LINK_NAME && (
            <NewLinkName />
          )}
          <NextBackButton />
        </div>
      </div>
    </>
  );
};

export default View;