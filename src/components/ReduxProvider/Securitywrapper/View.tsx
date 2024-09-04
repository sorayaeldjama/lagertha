'use client'
import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  securityLoader: boolean
}

const View: React.FC<Props> = ({ children, securityLoader }) => {
  return (
    <div className={styles.securitywrapper}>
      {
        !securityLoader && children
      }
    </div>
  );
};

export default View;