"use client";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/joy";
import styles from "./styles.module.scss";
import Input from "@mui/joy/Input";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onSubmit: (e: React.BaseSyntheticEvent) => void;
  password: string;
  onChangePassword: (e: React.BaseSyntheticEvent) => void;
  errorPassword: boolean;
  onPressCloseAlert: VoidFunction;
  passwordLoader: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>
  showPassword: boolean
};

const View: React.FC<Props> = ({
  onSubmit,
  password,
  onChangePassword,
  errorPassword,
  onPressCloseAlert,
  passwordLoader,
  setShowPassword,
  showPassword
}) => {

  const { t } = useTranslation()


  return (
    <>
      {passwordLoader ? (
        <CircularProgress />
      ) : (
        <form className={styles.passwordinput} onSubmit={onSubmit}>
          <Typography level="title-lg">
            {t('Link__Password_Input')}
          </Typography>
          {errorPassword && (
            <Alert
              sx={{ alignItems: "flex-start" }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
              endDecorator={
                <IconButton
                  variant="soft"
                  color="danger"
                  onClick={onPressCloseAlert}
                >
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              <div>
                <div>{t('Link__Password_Input_text1')}</div>
                <Typography level="body-sm" color="danger">
                  {t('Link__Password_Input_text2')}

                </Typography>
              </div>
            </Alert>
          )}
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            size="md"
            variant="soft"
            value={password}
            onChange={onChangePassword}
            endDecorator={
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                <RemoveRedEyeIcon />
              </IconButton>
            }
          />
          <Button
            endDecorator={<KeyboardArrowRight />}
            type="submit"
            onClick={onSubmit}
          >
            {t('Link__Password_Input_text3')}

          </Button>
        </form>
      )}
    </>
  );
};

export default View;
