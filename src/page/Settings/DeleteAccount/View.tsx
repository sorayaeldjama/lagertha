'use client'
import {
  Box, Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Input,
  List,
  ListItem,
  Modal,
  ModalDialog,
  Typography
} from '@mui/joy';
import styles from './styles.module.scss';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onCloseConfirmDeleteAccount: VoidFunction;
  onDeleteAccount: VoidFunction;
  onConfirmDeleteAccount: VoidFunction;
  isDeleteAccountOpen: boolean;
  deleteAccountPassword: string;
  onChangePassword: (e: React.BaseSyntheticEvent) => void;
}

const View: React.FC<Props> = ({
  onCloseConfirmDeleteAccount,
  onDeleteAccount,
  onConfirmDeleteAccount,
  isDeleteAccountOpen,
  deleteAccountPassword,
  onChangePassword
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.deleteaccount}>
      <Typography level="h4">{t('Settings_Security_Delete_Account_Title')}
      </Typography>
      <Typography sx={{ marginTop: 2 }}>
        {t('Settings_Security_Delete_Account_Title_Second')}
      </Typography>
      <List marker='disc'>
        <ListItem>  {t('Settings_Security_Delete_Account_Title_Second_List1')}

        </ListItem>
        <ListItem> {t('Settings_Security_Delete_Account_Title_Second_List2')}
        </ListItem>
        <ListItem>
          {t('Settings_Security_Delete_Account_Title_Second_List3')}
        </ListItem>
      </List>
      <Button
        onClick={onDeleteAccount}
        color='danger'
      >
        {t('Settings_Security_Delete_Account_Button')}
      </Button>
      <Modal open={isDeleteAccountOpen}
        onClose={onCloseConfirmDeleteAccount}>
        <ModalDialog variant="outlined" role="alertdialog" maxWidth="sm" >
          <DialogTitle>
            <WarningRoundedIcon />
            {t('Settings_Security_Delete_Account_Modal_Title')}
          </DialogTitle>
          <Divider />
          <DialogContent >
          </DialogContent>
          <Typography>{t('Settings_Security_Delete_Account_Modal_Text1')}
          </Typography>
          <Typography>{t('Settings_Security_Delete_Account_Modal_Text2')}</Typography>
          <Typography level='body-sm'>{t('Settings_Security_Delete_Account_Modal_Text3')}</Typography>
          <Input
            placeholder={t('Settings_Security_Delete_Account_Modal_Place_Holder')}
            value={deleteAccountPassword}
            onChange={onChangePassword}
            type="password"
          // error={errorPassword}
          />
          <DialogActions>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="plain" color="neutral" onClick={onCloseConfirmDeleteAccount} >
                {t('Settings_Security_Delete_Account_Modal_Cancel')}
              </Button>
              <Button variant="solid" color="primary" onClick={onConfirmDeleteAccount}>
                {t('Settings_Security_Delete_Account_Modal_Delete_Account')}
              </Button>
            </Box>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default View;