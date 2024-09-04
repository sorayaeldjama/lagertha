'use client'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button, Divider,
  Modal, ModalDialog,
  CssBaseline,
  CssVarsProvider,
  Snackbar,
  CircularProgress
} from '@mui/joy';
import styles from './styles.module.scss';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import ClearIcon from '@mui/icons-material/Clear';
import { Snack } from '@/types/snack';
import { useTranslation } from '@/hooks/useTranslation';
type Props = {
  onCloseConfirmDeleteLink: VoidFunction;
  onAgreeDeleteLink: VoidFunction;
  onCloseSnackBar: VoidFunction;
  closeSnack:VoidFunction;
  isConfirmDeleteLink: boolean;
  isDeleted: boolean;
  isSnackOpen:boolean;
  snack:Snack | null;

}

const View: React.FC<Props> = ({
  onCloseConfirmDeleteLink,
  onAgreeDeleteLink,
  onCloseSnackBar,
  closeSnack,
  isConfirmDeleteLink,
  isDeleted,
  isSnackOpen,
  snack
}) => {
  const {t} = useTranslation()

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <div className={styles.deletelink}>
        <Modal open={isConfirmDeleteLink}
          onClose={() => onCloseConfirmDeleteLink}>
          <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>
              <WarningRoundedIcon />
              {t('Links_Delete_Confirmation')}
            </DialogTitle>
            <Divider />
            <DialogContent>
              {t('Links_Delete_Text')}
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="primary" onClick={onAgreeDeleteLink}>
                {t('Links_Delete_ Yes')}
              </Button>
              <Button variant="plain" color="neutral" onClick={onCloseConfirmDeleteLink}>
                {t('Links_Delete_ Cancel')}
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </div>
    </CssVarsProvider>
  );
};

export default View;
// {snack && (
//   <Snackbar
//     variant="soft"
//     color={snack.type}
//     onClose={closeSnack}
//     open={!!snack}
//     autoHideDuration={4000}
//     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//     startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
//     endDecorator={
//       <Button
//         onClick={closeSnack}
//         size="sm"
//         variant="soft"
//         color={snack.type}
//       >
//         <ClearIcon />
//       </Button>
//     }
//   >
//     {/* {t(snack.children)} */}
//     {(snack.children)}
//   </Snackbar>
// )}