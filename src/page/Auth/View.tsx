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
} from "@mui/joy";
import styles from "./styles.module.scss";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import Image from "next/image";
import { Page } from "@/enums/pages.enum";
import PublicLayout from "@/components/PublicLayout";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onChangeEmail: (e: React.BaseSyntheticEvent) => void;
  onChangePassword: (e: React.BaseSyntheticEvent) => void;
  onChangeFirstname: (e: React.BaseSyntheticEvent) => void;
  onChangeLastname: (e: React.BaseSyntheticEvent) => void;
  onChangeLogin: (e: React.BaseSyntheticEvent) => void;
  // onSubmitSignUpForm: VoidFunction;
  onChangeLogInEmail: (e: React.BaseSyntheticEvent) => void;
  onChangeLogInPassword: (e: React.BaseSyntheticEvent) => void;
  onSubmitLogInForm: (e: React.BaseSyntheticEvent) => void;
  onChangeTotp: (e: React.BaseSyntheticEvent) => void;
  // isLoginFormOpen: boolean;
  // isSignUpFormOpen: boolean;
  // login: string;
  // appUuid: string;
  // loginPassword: string;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupLogin: string;
  signupApplicationUuid: string;
  logInLogin: string;
  logInPassword: string;
  loading: boolean;
  // loadinLoginForm: boolean;
  isSideBarOpen: boolean;
  is_otp_need: boolean;
  totp_code: string;
};

const View: React.FC<Props> = ({
  onSubmitLogInForm,
  onChangeLogInEmail,
  onChangeLogInPassword,
  onChangeTotp,
  logInLogin,
  logInPassword,
  loading,
  is_otp_need,
  totp_code,
}) => {
  const { t } = useTranslation()

  return (
    <>
      {loading ? (
        <div className={styles.progress}>
          <CircularProgress />
        </div>
      ) : (
        <PublicLayout title="Log in">
          <Stack gap={4} sx={{ mt: 2, width: '100%', position: 'relative' }}>
            {is_otp_need ? (
              <form onSubmit={onSubmitLogInForm}>
                <Typography level="body-md">
                   {t('Auth_Secure_Code')}

                </Typography>
                <FormControl required>
                  <FormLabel>{t('Auth_Secure_T_Otp')}</FormLabel>    

                  <Input
                    type="text"
                    name="Code T-otp"
                    value={totp_code}
                    onChange={onChangeTotp}
                  />
                </FormControl>
                <Button type="submit" fullWidth>
                  {t('Auth_Login_Button')}

                </Button>
              </form>
            ) : (
              <form onSubmit={onSubmitLogInForm}>
                <FormControl required>
                  <FormLabel>{t('Auth_Login')}</FormLabel>   

                  <Input
                    type="login"
                    name="login"
                    value={logInLogin}
                    onChange={onChangeLogInEmail}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>{t('Auth_Password')}</FormLabel>  

                  <Input
                    type="password"
                    name="password"
                    value={logInPassword}
                    onChange={onChangeLogInPassword}
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
                    <Link level="title-sm" href={Page.FORGET}>
                       {t('Auth_Forgot_Password')}

                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    {t('Auth_Button_Login')}

                  </Button>
                </Stack>
              </form>
            )}
            <Divider sx={{ marginX: '-90px' }} />
            <Typography level="title-sm"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1
              }}>
                      {t('Auth_Button_Text')}


              <Link href={Page.SIGNUP} sx={{ marginLeft: 1 }}>  {t('Auth_Button_Signup')} </Link> 

            </Typography>
          </Stack>
        </PublicLayout>
      )}
    </>
  );
};
export default View;
