'use client'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  Modal,
  ModalDialog,
  CssBaseline,
  CssVarsProvider,
  Snackbar
} from '@mui/joy';
import styles from './styles.module.scss';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import ClearIcon from '@mui/icons-material/Clear';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';
type Props = {
  onCloseConfirmDeleteFile: VoidFunction;
  onAgreeDeleteFile: VoidFunction;
  onCloseSnackBar: VoidFunction;
  closeSnack:VoidFunction;
  isConfirmDeleteFile: boolean;
  isDeleted: boolean;
  isSnackOpen:boolean;
  snack:Snack | null;
}
const View: React.FC<Props> = ({
  onCloseConfirmDeleteFile,
  onAgreeDeleteFile,
  onCloseSnackBar,
  closeSnack,
  isConfirmDeleteFile,
  isDeleted,
  isSnackOpen,
  snack
}) => {
  const { t } = useTranslation()

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <div className={styles.deletefile}>
        <Modal open={isConfirmDeleteFile}
          onClose={() => onCloseConfirmDeleteFile}>
          <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>
              <WarningRoundedIcon />
               {t('Files_Delete_Confirmation')}

            </DialogTitle>
            <Divider />
            <DialogContent>
              {t('Files_Delete_Confirmation_Text1')}

            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="primary" onClick={onAgreeDeleteFile}>
                 {t('Files_Delete_Confirmation_Yes')}

              </Button>
              <Button variant="plain" color="neutral" onClick={onCloseConfirmDeleteFile}>
                {t('Files_Delete_Confirmation_Cancel')}
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>

        {/* {snack && (
          <Snackbar
            variant="soft"
            color={snack.type}
            onClose={closeSnack}
            open={snack? true  :false}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
            endDecorator={
              <Button
                onClick={closeSnack}
                size="sm"
                variant="soft"
                color={snack.type}
              >
                <ClearIcon />
              </Button>
            }
          >
            {snack.children}
          </Snackbar>
        )} */}
      
      </div>
    </CssVarsProvider>
  );
};

export default View;