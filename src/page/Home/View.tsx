'use client'
import { Button, CircularProgress } from '@mui/joy';
import styles from './styles.module.scss';
import Login from '@/components/Login';

type Props = {
  onClickLogIn: VoidFunction;
  isLoginFormOpen: boolean;
  loading: boolean;
}
const View: React.FC<Props> = ({
  onClickLogIn,
  isLoginFormOpen,
  loading
}) => {

  return (
    <div className={styles.home}>
      {loading ?
        (<div className={styles.progress}>
          <CircularProgress />
        </div>
        )
        : (
          <div className={styles.home}>
            {
              <div className={styles.loginSignIn}>
                <Button variant="soft" size='md' onClick={onClickLogIn}>
                  Log In
                </Button>

              </div>
            }
          </div>
        )}
      {
        isLoginFormOpen &&
        <>
          <Login 
                   />
        </>
      }
    </div>
  );
};
export default View;



