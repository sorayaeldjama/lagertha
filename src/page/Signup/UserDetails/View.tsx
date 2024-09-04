'use client'
import { Alert, Box, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy';
import styles from './styles.module.scss';
import NextBackButtons from '../NextBackButtons';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onChangeEmail: (e: React.BaseSyntheticEvent) => void;
  onChangeFirstname: (e: React.BaseSyntheticEvent) => void;
  onChangeLastname: (e: React.BaseSyntheticEvent) => void;
  signupEmail: string;
  signupFirstname: string;
  signupLastname: string;
  firstNameError: boolean;
  lastNameError: boolean;
  emailError: boolean;
  isSignupPasswordOpen: boolean;
  isSignUpError: boolean;
}

const View: React.FC<Props> = ({
  onChangeEmail,
  onChangeFirstname,
  onChangeLastname,
  signupEmail,
  signupFirstname,
  signupLastname,
  firstNameError,
  lastNameError,
  emailError,
  isSignupPasswordOpen,
  isSignUpError
}) => {
  const { t } = useTranslation();


  return (
    <div className={styles.userdetails}>
      <Stack
        sx={{ gap: 2, marginBottom: 3 }}
        className={styles.form}
      >
        <FormControl required error={isSignUpError || emailError }>
          <FormLabel sx={{ marginBottom: 1 }}>   {t('Signup_User_Details_Email')}   </FormLabel>          

          <Input
            type="Email"
            name="email"
            value={signupEmail}
            onChange={onChangeEmail}
            placeholder={t('Signup_User_Details_Email_Place_Holder')}      

          />
          {isSignUpError && (
          <FormHelperText>
            <InfoOutlined />
            {t('Signup_User_Details_Email_Exist')}
          </FormHelperText>
          )}
        </FormControl>
        <Box sx={{
          display: 'flex',
          maxWidth: 400,
          justifyContent: 'space-between',
          gap: 1,
          flexWrap: 'wrap',
          overflow: 'hidden'
        }}>
          <FormControl required>
            <FormLabel>{t('Signup_User_Details_Firstname')}</FormLabel>  
            <Input
              name="firstname"
              value={signupFirstname}
              onChange={onChangeFirstname}
              sx={{ maxWidth: { xs: 400, sm: 196 } }}
              error={firstNameError}
              placeholder={t('Signup_User_Details_Firstname_Place_Holder')} 
            />
          </FormControl>
          <FormControl required>
            <FormLabel> {t('Signup_User_Details_Lastname')} </FormLabel>
            <Input
              name="lastname"
              value={signupLastname}
              onChange={onChangeLastname}
              error={lastNameError}
              sx={{ maxWidth: { xs: 400, sm: 196 } }}
              placeholder={t('Signup_User_Details_Lastname_Place_Holder')} 
            />
          </FormControl>
        </Box>
        
      </Stack>
      <NextBackButtons />

    </div>
  );
};

export default View;