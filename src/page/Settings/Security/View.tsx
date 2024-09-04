'use client'
import { Box, Button, CircularProgress, Divider, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import EditPassword from '../EditPassword';
import TwoFactorAuthentication from '../TwoFactorAuthentication';
import DeleteAccount from '../DeleteAccount';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onSubmitEditPassword: VoidFunction;
  editPassword: VoidFunction;
  editPasswordLoader: boolean;
}

const View: React.FC<Props> = ({
  onSubmitEditPassword,
  editPassword,
  editPasswordLoader
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.security}>
      <Typography sx={{ marginBottom: 2, marginTop: 1 }} level="h4">
        {t('Settings_Security_Change_Password_Title')}
      </Typography>
      <Typography level="body-md">
        {t('Settings_Security_Change_Password_Text')}
      </Typography>
      {editPasswordLoader ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 400,
            maxWidth: "100vw",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {<EditPassword />
          }
          <Box>
            <Button
              sx={{ marginTop: 2 }}
              onClick={onSubmitEditPassword}
            >
              {t('Settings_Security_Change_Password_Button')}
            </Button>
          </Box>
          <Divider sx={{ marginTop: 3, marginBottom: 2, width: 1300 }} />
          <TwoFactorAuthentication />
          <Divider sx={{ marginTop: 3, marginBottom: 2, width: 1300 }} />
          <DeleteAccount />
        </>
      )}
    </div>
  );
};

export default View;