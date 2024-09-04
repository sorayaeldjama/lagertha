'use client'
import { Alert, Box, IconButton, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  removeErrorUpload: VoidFunction;
  uploadFileError: boolean;
  maxSizeError: boolean;
}
const View: React.FC<Props> = ({
  removeErrorUpload,
  uploadFileError,
  maxSizeError

}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.alerterrorsfile}>

      {uploadFileError && !maxSizeError && (
        <Alert
          sx={{ alignItems: "flex-start" }}
          variant="soft"
          color="danger"
          startDecorator={<ReportIcon />}
          endDecorator={
            <IconButton
              variant="soft"
              color="danger"
              onClick={removeErrorUpload}
            >
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <div>Oops!</div>
            <Typography level="body-sm" color="danger">
               {t('Welcome_Alert_Upload_Errors_File')}

            </Typography>
          </div>
        </Alert>
      )}
    </div>
  );
};
export default View;