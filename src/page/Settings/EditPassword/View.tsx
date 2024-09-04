'use client'
import { Check, Close, Warning } from '@mui/icons-material';
import { Alert, AspectRatio, IconButton, Typography, Card, Input, Button, Modal, Box, DialogContent, DialogTitle, Divider, ModalDialog } from '@mui/joy';
import styles from './styles.module.scss';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  changePassword: (e: React.BaseSyntheticEvent) => void;
  changeConfirmPassword: (e: React.BaseSyntheticEvent) => void;
  changeOldPassword: (e: React.BaseSyntheticEvent) => void;
  onSubmitEditPassword: VoidFunction;
  removeError: VoidFunction;
  onCloseConfirmEditPassword: VoidFunction;
  newPassword: string;
  newConfirmPassword: string;
  oldPassword: string;
  editPasswordLoader: boolean;
  editResult: 'success' | 'error' | null;
  errorPassword: boolean;
  errorOldPassword: boolean;
  isEditPasswordOpen: boolean;
}

const View: React.FC<Props> = ({
  changePassword,
  changeConfirmPassword,
  changeOldPassword,
  onSubmitEditPassword,
  removeError,
  onCloseConfirmEditPassword,
  newPassword,
  newConfirmPassword,
  oldPassword,
  editPasswordLoader,
  editResult,
  errorPassword,
  errorOldPassword,
  isEditPasswordOpen
}) => {
  const { t } = useTranslation();

  return (
    <Modal open={isEditPasswordOpen}

      onClose={onCloseConfirmEditPassword}>
      <ModalDialog variant="outlined" role="alertdialog" maxWidth="lg" >
        <DialogTitle >
          {/* <WarningRoundedIcon /> */}
          <Typography>{t('Settings_Security_Change_Password_Modal_Title')}</Typography>
        </DialogTitle>
        {editResult === "success" && (
          <Alert
            size="lg"
            color="success"
            variant="solid"
            invertedColors
            startDecorator={
              <AspectRatio
                variant="solid"
                ratio="1"
                sx={{
                  minWidth: 40,
                  borderRadius: "50%",
                  boxShadow: "0 2px 12px 0 rgb(0 0 0/0.2)",
                }}
              >
                <div>
                  <Check />
                </div>
              </AspectRatio>
            }
            endDecorator={
              <IconButton
                variant="plain"
                sx={{
                  "--IconButton-size": "32px",
                  transform: "translate(0.5rem, -0.5rem)",
                }}
                onClick={removeError}
              >
                <Close />
              </IconButton>
            }
            sx={{ alignItems: "flex-start", overflow: "hidden" }}
          >
            <div>
              <Typography level="title-lg">{t('Settings_Security_Change_Password_Modal_Alert_Success')}</Typography>
              <Typography level="body-sm">
                {t('Settings_Security_Change_Password_Modal_Alert_Success_Update')}
              </Typography>
            </div>
          </Alert>
        )}
        {editResult === "error" && (
          <Alert
            size="lg"
            color="danger"
            variant="solid"
            invertedColors
            startDecorator={
              <AspectRatio
                variant="solid"
                ratio="1"
                sx={{
                  minWidth: 40,
                  borderRadius: "50%",
                  boxShadow: "0 2px 12px 0 rgb(0 0 0/0.2)",
                }}
              >
                <div>
                  <Warning />
                </div>
              </AspectRatio>
            }
            endDecorator={
              <IconButton
                variant="plain"
                sx={{
                  "--IconButton-size": "32px",
                  transform: "translate(0.5rem, -0.5rem)",
                }}
                onClick={removeError}
              >
                <Close />
              </IconButton>
            }
            sx={{ alignItems: "flex-start", overflow: "hidden" }}
          >
            <div>
              <Typography level="title-lg">{t('Settings_Security_Modal_Error')}</Typography>
              <Typography level="body-sm">
                {t('Settings_Security_Modal_Alert_Fail_Update_Password')}
              </Typography>
            </div>
          </Alert>
        )}
        <Card sx={{ marginTop: 2, marginBottom: 2 }}>
          <Typography level="body-sm">{t('Settings_Security_Modal_Old_Password')}</Typography>
          <Input
            placeholder={t('Settings_Security_Modal_Placeholder_Old_Password')}

            value={oldPassword}
            onChange={changeOldPassword}
            type="password"
            error={errorOldPassword}
          />
          <Typography level="body-sm">{t('Settings_Security_Change_Password_Modal_New_Password')}</Typography>
          <Input
            placeholder={t('Settings_Security_Modal_Placeholder_New_Password')}
            value={newPassword}
            onChange={changePassword}
            type="password"
            error={errorPassword}
          />
          <Input
            placeholder={t('Settings_Security_Modal_Placeholder_Confirm_Password')}
            value={newConfirmPassword}
            onChange={changeConfirmPassword}
            type="password"
            error={newConfirmPassword !== newPassword}
          />
          <Button onClick={onSubmitEditPassword}>
            {t('Settings_Security_Change_Password_Modal_Button_Edit_Password')}
          </Button>
        </Card>

      </ModalDialog>
    </Modal>
  );
};

export default View;
