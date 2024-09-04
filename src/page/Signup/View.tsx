import React from 'react';
import styles from './styles.module.scss';
import PublicLayout from '@/components/PublicLayout';
import { CircularProgress, Button, Box } from '@mui/joy';
import { Stack } from '@mui/system';
import SignupStepper from './SignupStepper';
import UserDetails from './UserDetails';
import { SignupStepEnum } from '@/enums/signupStep.enum';
// import SignupPassword from './SignupPassword ';
// import AlertsErrorPassword from './SignupPassword /AlertsErrorPassword';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onChangePassword: (e: React.BaseSyntheticEvent) => void;
  onChangeConfirmPassword: (e: React.BaseSyntheticEvent) => void;
  onChangeLogin: (e: React.BaseSyntheticEvent) => void;
  onSubmitSignUpForm: (e: React.BaseSyntheticEvent) => void;
  loading: boolean;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupFirstname: string;
  signupLastname: string;
  signupLogin: string;
  signupApplicationUuid: string;
  firstNameError: boolean;
  lastNameError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  isSignupPasswordOpen: boolean;
  isSignupDetailsOpen: boolean;
  currentStep: SignupStepEnum;
};

const View: React.FC<Props> = ({
  onChangePassword,
  onChangeConfirmPassword,
  onChangeLogin,
  onSubmitSignUpForm,
  loading,
  signupEmail,
  signupPassword,
  signupConfirmPassword,
  signupFirstname,
  signupLastname,
  signupLogin,
  signupApplicationUuid,
  firstNameError,
  lastNameError,
  passwordError,
  confirmPasswordError,
  isSignupPasswordOpen,
  isSignupDetailsOpen,
  currentStep,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.subscription}>
      <PublicLayout title="Unlock Premium Features by Creating Your Account Today!">
        <Stack gap={4} sx={{ mt: 4 }}>
          <SignupStepper />
          <form onSubmit={onSubmitSignUpForm} className={styles.form}>
            {isSignupPasswordOpen && currentStep === SignupStepEnum.USER_PASSWORD && (
              <>
                {/* <AlertsErrorPassword/> */}
                <SignupPassword />
                {loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Stack gap={4} sx={{ mt: 2 }}>
                    <Button type="submit" fullWidth>
                       {t('Signup_Button')}

                    </Button>
                  </Stack>
                )}
              </>
            )}
            {isSignupDetailsOpen && currentStep === SignupStepEnum.USER_DETAILS && (
              <UserDetails />
            )
            }
          </form>
        </Stack>
      </PublicLayout>
    </div>
  );
};

export default View;
