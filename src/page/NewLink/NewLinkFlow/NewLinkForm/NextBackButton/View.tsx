'use client'
import { Button } from '@mui/joy';
import styles from './styles.module.scss';
import { current } from '@reduxjs/toolkit';
import { StepEnum } from '@/enums/steps.enum';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onClickNext: (e: React.BaseSyntheticEvent) => void;
  onClickBack: (e: React.BaseSyntheticEvent) => void;
  next_text: string;
  back_disable: boolean,
}
const View: React.FC<Props> = ({
  onClickNext,
  onClickBack,
  next_text,
  back_disable,
}) => {
  const { t } = useTranslation()


  return (
    <div className={styles.nextbackbar}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem"
      }}>
        <Button
          onClick={onClickBack}
          disabled={back_disable}
          variant="outlined"
        >
            {t('new_link_Back_Button')}
        </Button>
        <Button
          onClick={onClickNext}
          variant="solid"
          color="primary"
        >
          {next_text}
        </Button>
      </div>
    </div >
  );
};
export default View;