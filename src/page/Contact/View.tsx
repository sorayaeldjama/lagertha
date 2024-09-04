'use client'
import { FormLabel, Textarea, Box, Button, Typography, Snackbar, Alert, } from '@mui/joy';
import styles from './styles.module.scss';
import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import { useTranslation } from '@/hooks/useTranslation';
import { Snack } from '@/types/snack';
import ReportIcon from "@mui/icons-material/Report";


type Props = {
  onSendContactMessage: (e: React.BaseSyntheticEvent) => void
  onChangeMessage: (e: React.BaseSyntheticEvent) => void
  onChangeObject: (e: React.BaseSyntheticEvent) => void
  // onCloseConfirmSendMessage: VoidFunction
  // onAgreeSendMessage: VoidFunction
  onCloseSnackBar: VoidFunction;
  closeSnack: VoidFunction;
  isConfirmSendMessage: boolean;
  subject: string;
  message: string;
  isSendMessage: boolean;
  snack: Snack | null;
  subjectEmptyError: boolean;
  messageEmptyError: boolean;
  
  
}

const View: React.FC<Props> = ({
  onSendContactMessage,
  onChangeMessage,
  onChangeObject,
  onCloseSnackBar,
  closeSnack,
  // onCloseConfirmSendMessage,
  // onAgreeSendMessage,
  isConfirmSendMessage,
  message,
  isSendMessage,
  subject,
  snack,
  subjectEmptyError,
  messageEmptyError
}) => {
  const { t } = useTranslation();
  return (
    // <div className={styles.contact}>
    //   <CssVarsProvider disableTransitionOnChange>
    //     <CssBaseline />
    <PrivateLayout title={t('Contact_Title')}>
      {/* <Box
        component="main"
        className="MainContent"
        sx={{
          marginInlineStart: -6,

          px: {xs: 2, md: 6 },
      pt: {
        xs: "calc(12px + var(--Header-height))",
      sm: "calc(12px + var(--Header-height))",
      md: 3,
            },
      pb: {xs: 2, sm: 2, md: 3 },
      flex: 1,
      display: "flex",
      flexDirection: "column",
      maxWidth: 500,
      height: "100dvh",
      gap: 1,
         }}
       > */}

      <form onSubmit={onSendContactMessage} className={styles.form} noValidate>
        <FormLabel></FormLabel>
        <Typography >{t('Contact_Text1')}
        </Typography>

        <Typography sx={{ marginBottom: 2, marginTop: 1 }}> {t('Contact_Text2')}
        </Typography>
        {
          subjectEmptyError && (

            <Alert
              sx={{ alignItems: "flex-start", marginBottom: 1 }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
            >
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  {t('Contact_Subject_Alert_Empty')}

                </Typography>
              </div>
            </Alert>
          )
        }
        {
          messageEmptyError && (
            <Alert
              sx={{ alignItems: "flex-start", marginBottom: 1 }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
            >
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  {t('Contact_Message_Alert_Empty')}

                </Typography>
              </div>
            </Alert>
          )
        }
        <Textarea
          required
          name="Outlined"
          placeholder={t('Contact_Object')} value={subject} variant="outlined"
          onChange={onChangeObject}
          sx={{ marginBottom: 1 }}
        />


        <Textarea
          required
          placeholder={t('Contact_PlaceHolder')}
          onChange={onChangeMessage}
          minRows={3}
          value={message}
          endDecorator={
            <Box
              sx={{
                display: 'flex',
                gap: 'var(--Textarea-paddingBlock)',
                pt: 'var(--Textarea-paddingBlock)',
                borderTop: '1px solid',
                borderColor: 'divider',
                flex: 'auto',
              }}
            >
              <Button sx={{ ml: 'auto' }} type='submit'>{t('Contact_Button')}</Button>
            </Box>
          }
          sx={{
            minWidth: 300,
          }}
        />
      </form>
      {/* <Modal open={isConfirmSendMessage}
            onClose={() => onCloseConfirmSendMessage}>
            <ModalDialog variant="outlined" role="alertdialog">
              <DialogTitle>
                <WarningRoundedIcon />
                Confirmation
              </DialogTitle>
              <Divider />
              <DialogContent>
                Are you sure you want to send this message?
              </DialogContent>
              <DialogActions>
                <Button variant="solid" color="primary" onClick={onAgreeSendMessage}>
                  Yes, send this message
                </Button>
                <Button variant="plain" color="neutral" onClick={onCloseConfirmSendMessage}>
                  Cancel
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal> */}

      {/* </Box> */}
      {/* </CssVarsProvider> */}

      {/* </div> */}
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
    </PrivateLayout >
  );
};

export default View;


