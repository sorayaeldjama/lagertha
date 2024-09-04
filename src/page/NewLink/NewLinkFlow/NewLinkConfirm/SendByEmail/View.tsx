"use client";
import {
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
  Alert,
  IconButton,
  Typography,
  Sheet,
  Snackbar,
} from "@mui/joy";
import styles from "./styles.module.scss";
import SendIcon from "@mui/icons-material/Send";
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import ClearIcon from "@mui/icons-material/Clear";
import { DialogContentText } from "@mui/material";
import { Snack } from "@/types/snack";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onCloseConfirmSendByEmail: VoidFunction;
  // onAgreeSendByEmail: VoidFunction;
  onSendLinkByEmail: (e: React.BaseSyntheticEvent) => void;
  onChangeEmail: (e: React.BaseSyntheticEvent) => void;
  removeEmailError: VoidFunction;
  onCloseSnackBar: VoidFunction;
  closeSnack: VoidFunction;

  isSendByEmailOpen: boolean;
  emailSendLink: string;
  emailError: boolean;
  isSendByEmail: boolean;
  isLinkSended: boolean;
  snack: Snack | null;
};

const View: React.FC<Props> = ({
  onCloseConfirmSendByEmail,
  // onAgreeSendByEmail,
  onSendLinkByEmail,
  onChangeEmail,
  removeEmailError,
  onCloseSnackBar,
  closeSnack,
  isSendByEmailOpen,
  emailSendLink,
  emailError,
  isSendByEmail,
  isLinkSended,
  snack,
}) => {
  const { t } = useTranslation()
  return (
    <div className={styles.sendbyemail}>
      <Modal open={isSendByEmailOpen} onClose={onCloseConfirmSendByEmail}>
        <ModalDialog variant="outlined" role="alertdialog" maxWidth="sm">
          <DialogTitle> {t('newLink_SendBy_Email_Text_1')}</DialogTitle>
          {/* <Divider sx={{marginBottom :2}} /> */}
          <form onSubmit={onSendLinkByEmail}>
            <DialogContent>
              {emailError && (
                <Alert
                  sx={{ alignItems: "flex-start", marginBottom: 1 }}
                  variant="soft"
                  color="danger"
                  startDecorator={<ReportIcon />}
                  endDecorator={
                    <IconButton
                      variant="soft"
                      color="danger"
                      onClick={removeEmailError}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  }
                >
                  <div>
                    <div>Oops!</div>
                    <Typography level="body-sm" color="danger">
                      {t('newLink_SendBy_Email_Text1')}
                    </Typography>
                    <Typography level="body-sm" color="danger">
                      {t('newLink_SendBy_Email_Text2')}

                    </Typography>
                  </div>
                </Alert>
              )}
              <DialogContentText>
                {t('newLink_SendBy_Email_Text3')}

              </DialogContentText>
              <DialogContentText>
                {t('newLink_SendBy_Email_Text4')}
              </DialogContentText>
              <Alert color="neutral" startDecorator={<ReportIcon />}>
                <DialogContentText>
                  {t('newLink_SendBy_Email_Text5')}
                </DialogContentText>
              </Alert>
              <Typography> {t('newLink_SendBy_Email_Text6')}
              </Typography>
              <Input
                name="Email"
                value={emailSendLink}
                onChange={onChangeEmail}
                autoFocus
                placeholder={t('newLink_SendBy_Email_Text7')}
              // disabled={noPassword}
              // error={errorPassword}
              />
            </DialogContent>
            <DialogActions sx={{ marginBottom: -1 }}>
              <Button
                variant="solid"
                color="primary"
                type="submit"
                endDecorator={<SendIcon />}
              >
                {t('newLink_SendBy_Email_Text8')}
              </Button>
              <Button
                variant="plain"
                color="neutral"
                onClick={onCloseConfirmSendByEmail}
              >
                {t('newLink_SendBy_Email_Text9')}

              </Button>
            </DialogActions>
          </form>
        </ModalDialog>
      </Modal>
      {/* {snack && (
        <Snackbar
          variant="soft"
          color={snack.type}
          onClose={closeSnack}
          open={snack ? true : false}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
        </Snackbar> */}
      {/* )} */}
    </div>
  );
};

export default View;
