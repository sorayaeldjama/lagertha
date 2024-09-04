'use client'
import { CssVarsProvider, CssBaseline, Modal, ModalDialog, DialogTitle, Divider, DialogContent, DialogActions, Button, Snackbar } from '@mui/joy';
import styles from './styles.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { LinksState } from '@/reducers/linksReducer';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onAgreeLogout: VoidFunction;
  onCloseConfirmLogout: VoidFunction;
  logout: VoidFunction;
  onCloseSnackBar: VoidFunction;
  isConfirmLogout: boolean;
  isLogOut: boolean;
}

const View: React.FC<Props> = ({
  onAgreeLogout,
  onCloseConfirmLogout,
  onCloseSnackBar,
  isConfirmLogout,
  isLogOut
}) => {
  const { t } = useTranslation()

  return (
    <div className={styles.confirmlogout}>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
          <Modal open={isConfirmLogout}
            onClose={() => onCloseConfirmLogout}>
            <ModalDialog variant="outlined" role="alertdialog">
              <DialogTitle>
                <WarningRoundedIcon />
                {t('SideBar_ConfirmLogout_Confirmation')}
              </DialogTitle>
              <Divider />
              <DialogContent>
              {t('SideBar_ConfirmLogout_Text')}
              </DialogContent>
              <DialogActions>
                <Button variant="solid" color="primary" onClick={onAgreeLogout}>
                {t('SideBar_ConfirmLogout_Yes')}
                </Button>
                <Button variant="plain" color="neutral" onClick={onCloseConfirmLogout}>
                {t('SideBar_ConfirmLogout_Cancel')}
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal>
          
      </CssVarsProvider>
    </div>
  );
};

export default View;