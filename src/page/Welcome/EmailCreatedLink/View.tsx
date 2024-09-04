'use client'
import { Alert, Box, Button, FormControl, FormLabel, IconButton, Input, LinearProgress, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import SendIcon from '@mui/icons-material/Send';
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  resertNewLink: VoidFunction
  onSendLinkByEmail: (e: React.BaseSyntheticEvent) => void;
  onChangeEmail: (e: React.BaseSyntheticEvent) => void;
  removeEmailError: VoidFunction;
  // selectedFile: File | null;
  emailSendLink: string;
  isLinkPasswordOpen: boolean;
  createdLink: string;
  emailError: boolean;
  emailEmpty: boolean;
  removeEmailEmpty: VoidFunction;
}

const View: React.FC<Props> = ({
  resertNewLink,
  onSendLinkByEmail,
  onChangeEmail,
  removeEmailError,
  emailSendLink,
  isLinkPasswordOpen,
  createdLink,
  emailError,
  emailEmpty,
  removeEmailEmpty
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.emailcreatedlink}>
      <>
        {
          createdLink ? (
            <>
              <Alert
                sx={{ alignItems: "flex-start" }}
                variant="soft"
                color="success"
                startDecorator={<ReportIcon />}
              >
                <div>
                  <div>{t('Welcome_Email_Created_Link_Alert_Title')}</div>
                  <Typography level="body-sm" color="success">
                    {t('Welcome_Email_Created_Link_Alert_Text')}   </Typography>
                </div>
              </Alert>
              <form onSubmit={onSendLinkByEmail} noValidate>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: 2,
                    gap: 2,
                  }}
                >
                  <FormControl required>
                    <FormLabel> {t('Welcome_Email_Created_Link_Alert_Email')}</FormLabel>
                    {
                      emailEmpty && (
                        <Alert
                          sx={{ alignItems: "flex-start", marginBottom: 1 }}
                          variant="soft"
                          color="danger"
                          startDecorator={<ReportIcon />}
                          endDecorator={
                            <IconButton
                              variant="soft"
                              color="danger"
                              onClick={removeEmailEmpty}
                            >
                              <CloseRoundedIcon />
                            </IconButton>
                          }
                        >
                          <div>
                            <div>Oops!</div>
                            <Typography level="body-sm" color="danger">
                              {t('Welcome_Email_Created_Link_Alert_Email_Empty')}
                            </Typography>

                          </div>
                        </Alert>

                      )
                    }
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
                            {t('Welcome_Email_Created_Link_Alert_Email_Error')}
                          </Typography>
                          <Typography level="body-sm" color="danger">
                            {t('Welcome_Email_Created_Link_Alert_Text_Email_Valid')}
                          </Typography>
                        </div>
                      </Alert>
                    )}
                    <Input
                      name="email"
                      value={emailSendLink}
                      onChange={onChangeEmail}
                      autoFocus
                      placeholder={t('Welcome_Email_Created_Link_Alert_Text_Email_PlaceHolder')}
                      // disabled={noPassword}
                      error={emailError || emailEmpty}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: 4,
                    marginBottom: 2,
                    gap: 2,
                  }}
                >
                  <Button endDecorator={<SendIcon />}
                    color="primary"
                    variant="solid"
                    type='submit'
                  >
                    {t('Welcome_Email_Created_Link_Button_Get_Email')}
                  </Button>
                </Box>
              </form>
            </>
          ) : (
            <LinearProgress />
          )
        }
      </>
    </div>
  );
};

export default View;