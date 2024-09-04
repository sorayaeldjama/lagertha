'use client'
import { Box, Button, Card, CircularProgress, DialogContent, DialogTitle, Divider, Input, Modal, ModalDialog, Switch, Tooltip, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import QRCode from 'qrcode.react';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onChangeTotp: (e: React.BaseSyntheticEvent) => void;
  apply2fa: VoidFunction;
  onDisableTwoFactor: VoidFunction;
  onChangeTotpDisable: (e: React.BaseSyntheticEvent) => void;
  applyMfa: VoidFunction;
  disableMfa: VoidFunction;
  onCloseConfirmEnableMfa: VoidFunction;
  onManageMfa: VoidFunction;
  onCloseConfirmDisableMfa: (e: React.BaseSyntheticEvent) => void;
  is_2fa: boolean;
  otp_code: string | null;
  totp: string;
  mfa_loading: boolean;
  totpDisable: string;
  switchChecked: boolean;
  isDisableMfaOpen: boolean;
  isEnableMfaOpen: boolean;
  isMfaActive: boolean;
}

const View: React.FC<Props> = ({
  onCloseConfirmEnableMfa,
  onChangeTotp,
  apply2fa,
  onDisableTwoFactor,
  onChangeTotpDisable,
  applyMfa,
  disableMfa,
  onManageMfa,
  onCloseConfirmDisableMfa,
  is_2fa,
  otp_code,
  totp,
  mfa_loading,
  totpDisable,
  switchChecked,
  isDisableMfaOpen,
  isEnableMfaOpen,
  isMfaActive
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.twoFactor}>
      <Typography level="h4">
        {t('Settings_Security_Two_Factor_Authentication_Title')}
      </Typography>
      <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
        {t('Settings_Security_Two_Factor_Authentication_Text')}
      </Typography>
      <Typography level="h4">{t('Settings_Security_Two_Factor_Authentication_Status')}
        
        <Typography sx={{ fontWeight: 'bold', marginLeft: 0.5 }}>
          {is_2fa ?
           <Typography>{t('Settings_Security_Two_Factor_Authentication_Status_Enabled')}</Typography>
          :   <Typography>{t('Settings_Security_Two_Factor_Authentication_Status_Disabled')}</Typography>
        }
        </Typography >

      </Typography>
      <Button
        sx={{ marginTop: 2 }}
        onClick={onManageMfa}>
        {t('Settings_Security_Two_Factor_Authentication_Manage_two-factor')}
      </Button>
      {!is_2fa && otp_code && (
        <>
          {
            (mfa_loading && !isEnableMfaOpen) ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Modal open={isEnableMfaOpen}
                onClose={onCloseConfirmEnableMfa}>
                <ModalDialog variant="outlined" role="alertdialog" maxWidth="sm" >
                  <DialogTitle>
                    {/* <WarningRoundedIcon /> */}
                    <Typography >
                      {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_Title')}
                    </Typography>
                  </DialogTitle>
                  <Divider />
                  <DialogContent >
                    <Typography level="body-md">
                      {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_Text')}
                    </Typography>
                    <Card>
                      <Typography level="body-sm">
                        {" "}
                        {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_Title_Second')}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Box>
                          <div className={styles.qrContainer}>
                            <QRCode value={otp_code} />
                          </div>
                        </Box>
                        <Box>
                          <Typography level="body-sm">
                            {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_List1')}
                          </Typography>

                          <Typography level="body-sm">
                            {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_List2')}
                          </Typography>
                          <Typography level="body-sm">
                            {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_List3')}
                          </Typography>
                        </Box>
                      </Box>
                      <Input
                        name="Disabling Code"
                        required
                        placeholder={t('Settings_Security_Two_Factor_Authentication_Modal_Enable_Place_Holder')}
                        // fullWidth
                        // variant="outlined"
                        value={totp}
                        onChange={onChangeTotp}
                      />
                      <Button onClick={apply2fa} >
                        {t('Settings_Security_Two_Factor_Authentication_Modal_Enable_Button')}
                      </Button>
                    </Card>
                  </DialogContent>
                </ModalDialog>
              </Modal>
            )
          }
        </>
      )
      }
      <Modal open={isDisableMfaOpen}
        onClose={onCloseConfirmDisableMfa}>
        <ModalDialog variant="outlined" role="alertdialog" maxWidth="sm" >
          <DialogTitle>
            {/* <WarningRoundedIcon /> */}
            {t('Settings_Security_Two_Factor_Authentication_Modal_Disable_Title')}
          </DialogTitle>
          <Divider />
          <DialogContent >
          </DialogContent>
          <Typography level="body-md">
            {t('Settings_Security_Two_Factor_Authentication_Modal_Disable_Text')}
          </Typography>
          <Card>
            <Typography level="body-sm">
              {" "}
              {t('Settings_Security_Two_Factor_Authentication_Modal_Disable_Title_Second')}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Input
                name="Validation Code"
                required
                placeholder={t('Settings_Security_Two_Factor_Authentication_Modal_Disable_Place_Holder')}

                // fullWidth
                // variant="outlined"
                value={totpDisable}
                onChange={onChangeTotpDisable}
              />
            </Box>
            <Button onClick={onDisableTwoFactor} color="danger" sx={{ marginTop: 2, marginBottom: 1 }}>
              {t('Settings_Security_Two_Factor_Authentication_Modal_Disable_Button')}
            </Button>
          </Card>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default View;