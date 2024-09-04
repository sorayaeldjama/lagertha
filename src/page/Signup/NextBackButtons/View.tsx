'use client'
import { Button } from '@mui/joy';
import styles from './styles.module.scss';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onClickNext: (e: React.BaseSyntheticEvent) => void;
  onClickBack: (e: React.BaseSyntheticEvent) => void;
  back_disable: boolean,

}
const View: React.FC<Props> = ({
  onClickNext,
  onClickBack,
  back_disable
}) => {
  const { t } = useTranslation();


  return (
    <div className={styles.nextbackbuttons}>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "1rem"
      }}>
        <Button
          onClick={onClickNext}
          variant="solid"
          color="primary"
        >
          {t('Signup_NextBackButtons')}

        </Button>
      </div>
    </div>
  );
};

export default View;