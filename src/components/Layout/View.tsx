"use client";
import styles from "./styles.module.scss";
import { Color } from "@/enums/colors.enum";
import { Snack } from "@/types/snack";
import { Button, CssVarsProvider, Snackbar,  } from "@mui/joy";
import { extendTheme,ThemeProvider } from '@mui/joy/styles';

import Sidebar from "../Sidebar";
import Header from "../Header";
import { useTranslation } from "@/hooks/useTranslation";
import ClearIcon from '@mui/icons-material/Clear';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import React from "react";
import { createTheme } from "@mui/material";
import Signup from "@/page/Signup";


type Props = {
  children: React.ReactNode;
  onCloseSnackBar:VoidFunction;
  closeSnack:VoidFunction;
  isUnsecure: boolean;
  isLogged: boolean;
  snack:Snack | null;

};




const View: React.FC<Props> = ({ children, isUnsecure, isLogged ,snack,onCloseSnackBar,closeSnack}) => {
  const { t } = useTranslation();
 
  return (


    <ThemeProvider
    >
      {/* <RolesChecker> */}
      {/* {isUnsecure || !isLogged ? (
        <>{children}</>
      ) : (
        <div className={styles.layout}>
          <Sidebar/>
          <div className={styles.main}>
            <Header />
            {children}
            {snack && (
          <Snackbar
          // sx={theme => ({
          //   color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.72)`,
          // })}
            variant="soft"
            color={snack.type}
            onClose={closeSnack}
            open={snack? true  :false}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
            endDecorator={
              <Button
             
                onClick={closeSnack}
                size="sm"
                variant="soft"
                color={snack.type}
              >
                <ClearIcon />
              </Button>
            }
          >
            {snack.children}
          </Snackbar>
        )}
          </div>
        </div>
      )} */}
      {/* </RolesChecker> */}
      <Signup></Signup>
    </ThemeProvider>
  );
};

export default View;
