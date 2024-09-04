'use client'
import { Button, CircularProgress, FormLabel, Textarea } from '@mui/joy';
import styles from './styles.module.scss';

type Props = {
  onSubmitLogInForm: VoidFunction;
  onChangeLogInEmail: (e: React.BaseSyntheticEvent) => void;
  onChangeLogInPassword: (e: React.BaseSyntheticEvent) => void;
  isLoginFormOpen: boolean;
  logInLogin: string;
  logInPassword: string;
  loadinLoginForm: boolean;
}

const View: React.FC<Props> = ({
  onSubmitLogInForm,
  onChangeLogInEmail,
  onChangeLogInPassword,
  isLoginFormOpen,
  logInLogin,
  logInPassword,
  loadinLoginForm,
}) => {

  return (
    <div className={styles.login}>
      {
        loadinLoginForm ?
          (<div className={styles.progress}>
            <CircularProgress />
          </div>
          )
          : (
            isLoginFormOpen && (
              <div className={styles.login}>
                <FormLabel className={styles.loginForm}>
                  <Textarea
                    name="Outlined"
                    placeholder="Login"
                    variant="outlined"
                    value={logInLogin}
                    onChange={onChangeLogInEmail}
                  />
                  <Textarea
                    name="Outlined"
                    placeholder="Password"
                    variant="outlined"
                    value={logInPassword}
                    onChange={onChangeLogInPassword}
                  />
                  <Button variant="soft" size='md' onClick={onSubmitLogInForm}>Log In</Button>
                </FormLabel>
              </div>)
          )}
    </div>
  );
};

export default View;