'use client'
import { Alert, Box, IconButton, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  removeErrorSize: VoidFunction;
  maxSizeError: boolean;

}
const View: React.FC<Props> = ({
  removeErrorSize,
  maxSizeError,

}) => {
  const { t } = useTranslation()

  return (
    <div className={styles.alerterrorsfile}>
      {maxSizeError && (
        <Alert
          sx={{ alignItems: "flex-start" }}
          variant="soft"
          color="danger"
          startDecorator={<ReportIcon />}
          endDecorator={
            <IconButton
              variant="soft"
              color="danger"
              onClick={removeErrorSize}
            >
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <div>Oops!</div>
            <Typography level="body-sm" color="danger">
              {t('Welcome_Alert_Errorfile_Text1')}
            </Typography>
          </div>
        </Alert>
      )}
     
    </div>
  );
};

export default View;