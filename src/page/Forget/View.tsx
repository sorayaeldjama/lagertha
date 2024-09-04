"use client";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  Input,
  Link,
  Stack,
  Typography,
  FormHelperText,
} from "@mui/joy";
import styles from "./styles.module.scss";
import FormLabel from "@mui/joy/FormLabel";
import { Page } from "@/enums/pages.enum";
import { ForgetStep } from "@/enums/forgetStep.enum";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import PublicLayout from "@/components/PublicLayout";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  step: ForgetStep;
  login: string;
  changeLogin: (e: React.BaseSyntheticEvent) => void;
  getResetCode: VoidFunction;
  loaderStart: boolean;
  code: string;
  changeCode: (e: React.BaseSyntheticEvent) => void;
  validateCode: VoidFunction;
  newPassword: string;
  newConfirmPassword: string;
  changeNewPassword: (e: React.BaseSyntheticEvent) => void;
  changeNewConfirmPassword: (e: React.BaseSyntheticEvent) => void;
  errorNewPassword: boolean;
  submitReinit: (e: React.BaseSyntheticEvent) => void;
  is_otp_need: boolean;
  otp_code: string;
  changeOtpCode: (e: React.BaseSyntheticEvent) => void;
};

const View: React.FC<Props> = ({
  step,
  login,
  changeLogin,
  getResetCode,
  loaderStart,
  code,
  changeCode,
  validateCode,
  newPassword,
  newConfirmPassword,
  changeNewPassword,
  changeNewConfirmPassword,
  errorNewPassword,
  submitReinit,
  is_otp_need,
  otp_code,
  changeOtpCode,
}) => {
  const { t } = useTranslation()


  return (
    <>
      {false ? (
        <div className={styles.progress}>
          <CircularProgress />
        </div>
      ) : (
        <PublicLayout title={t('Forget_Title')}>

          {step === ForgetStep.START && (
            <>
              {loaderStart ? (
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Stack gap={4} sx={{ mt: 2 }}>
                  <form
                  // onSubmit={onSubmitLogInForm}
                  >
                    <FormControl required>
                      <FormLabel>{t('Forget_Login')}</FormLabel>
                      <Input
                        type="login"
                        name="login"
                        value={login}
                        onChange={changeLogin}
                      />
                    </FormControl>
                    <Stack gap={4} sx={{ mt: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link level="title-sm" href={Page.HOME}>
                          {t('Forget_Text1')}
                        </Link>
                      </Box>
                      <Button type="submit" fullWidth onClick={getResetCode}>
                        {t('Forget_Text2')}
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              )}
            </>
          )}
          {step === ForgetStep.CODE && (
            <>
              {loaderStart ? (
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Stack gap={4} sx={{ mt: 2 }}>
                  <form
                  // onSubmit={onSubmitLogInForm}
                  >
                    <Typography level="body-md">{t('Forget_Text3')} {login}!</Typography>

                    <Typography level="body-md">
                      {t('Forget_Text4')}
                    </Typography>
                    <FormControl required>
                      <FormLabel>{t('Forget_Text5')}</FormLabel>

                      <Input name="code" value={code} onChange={changeCode} />
                    </FormControl>
                    <Stack gap={4} sx={{ mt: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link level="title-sm" onClick={getResetCode}>
                          {t('Forget_Text6')}
                        </Link>
                      </Box>
                      <Button type="submit" fullWidth onClick={validateCode}>
                        {t('Forget_Text7')}

                      </Button>
                    </Stack>
                  </form>
                </Stack>
              )}
            </>
          )}
          {step === ForgetStep.PASSWORD && (
            <>
              {loaderStart ? (
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Stack gap={4} sx={{ mt: 2 }}>
                  <form
                  // onSubmit={onSubmitLogInForm}
                  >
                    {!is_otp_need ? (
                      <>
                        <Typography level="body-md">
                          {t('Forget_Text8')}

                        </Typography>
                        <Typography level="body-md">
                          {t('Forget_Text9')}
                        </Typography>
                        <FormControl required error={errorNewPassword}>
                          <FormLabel>{t('Forget_Text10')}</FormLabel>
                          <Input
                            type="password"
                            name="fill your new password..."
                            value={newPassword}
                            onChange={changeNewPassword}
                          />
                          {errorNewPassword && (
                            <FormHelperText>
                              <InfoOutlined />
                              {t('Forget_Text11')}
                            </FormHelperText>
                          )}
                        </FormControl>
                        <FormControl required>
                          <FormLabel>{t('Forget_Text12')}</FormLabel>
                          <Input
                            type="password"
                            name="confirm"
                            value={newConfirmPassword}
                            onChange={changeNewConfirmPassword}
                            error={newPassword !== newConfirmPassword}
                          />
                        </FormControl>
                      </>
                    ) : (
                      <>
                        <Typography level="body-md">
                         {t('Forget_Text13')}
                        </Typography>
                        <FormControl required>
                          <FormLabel> {t('Forget_Text14')}</FormLabel>
                          <Input
                            type="text"
                            name="Code T-otp"
                            value={otp_code}
                            onChange={changeOtpCode}
                          />
                        </FormControl>
                      </>
                    )}

                    <Stack gap={4} sx={{ mt: 2 }}>
                      <Button type="submit" fullWidth onClick={submitReinit}>
                        {t('Forget_Text15')}
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              )}
            </>
          )}
        </PublicLayout>
      )}
    </>
  );
};
export default View;
