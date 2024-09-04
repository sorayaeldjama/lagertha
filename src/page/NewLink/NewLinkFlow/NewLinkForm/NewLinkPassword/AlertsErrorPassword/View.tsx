'use client'
import { Alert, List, ListItem, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import ReportIcon from "@mui/icons-material/Report";

type Props = {
  errorPassword: boolean;
  linkconfirmPasswordError: boolean;
  isPassEmpty: boolean;
  isEightCaracter: boolean;
  isUpperCaseLetter: boolean;
  isLowerCaseLetter: boolean;
  isDigit: boolean;
}
const View: React.FC<Props> = ({
  errorPassword,
  linkconfirmPasswordError,
  isPassEmpty,
  isEightCaracter,
  isUpperCaseLetter,
  isLowerCaseLetter,
  isDigit,
}) => {
  return (
    <>
      <div className={styles.alerterrorpassword}>
        {errorPassword && (
          <Alert
            sx={{ alignItems: "flex-start" }}
            variant="soft"
            color="danger"
            startDecorator={<ReportIcon />}
          >
            {isPassEmpty ? (
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  It looks like your password is empty.
                  Please enter a secure password to protect your account.
                </Typography>
              </div>
            ) : (
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  It seems there&apos;s an issue with your password. Please ensure it Has at least:
                </Typography>
                <List marker="circle">
                  {
                    !isEightCaracter && (
                      <ListItem >
                        <Typography level='body-sm'>8 characters</Typography>
                      </ListItem>
                    )
                  }
                  {
                    !isUpperCaseLetter && (
                      <ListItem >
                        <Typography level='body-sm'>one uppercase letter</Typography>
                      </ListItem>
                    )
                  }
                  {
                    !isLowerCaseLetter && (
                      <ListItem>
                        <Typography level='body-sm'>one lowercase letter</Typography>
                      </ListItem>
                    )
                  }
                  {
                    !isDigit && (
                      <ListItem>
                        <Typography level='body-sm'>one digit (0-9) </Typography>
                      </ListItem>
                    )
                  }
                </List>
              </div>
            )
            }
          </Alert>
        )
        }
        {
          linkconfirmPasswordError && (
            <Alert
              sx={{ alignItems: "flex-start" }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
            >
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  your confirm password is not valid
                </Typography>
              </div>
            </Alert>
          )
        }
      </div >
    </>
  );
};

export default View;