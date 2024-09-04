"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  CssVarsProvider,
  CssBaseline,
} from "@mui/joy";
import styles from "./styles.module.scss";
import  { formLabelClasses } from "@mui/joy/FormLabel";
import hero from "../../../public/image/hero.jpg"
import { Page } from "@/enums/pages.enum";
import { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Image from 'next/image'
import logo from"../../../public/image/logo.svg"
import { extendTheme } from '@mui/joy/styles';

type Props = {
  children: ReactNode;
  title: string;
  onPressHome: VoidFunction;
  is_center: boolean;

};

const View: React.FC<Props> = ({ children, title, onPressHome, is_center  }) => {
  const { t } = useTranslation()
  
  return (
      <div className={styles.home}>
        <Box
          sx={(theme) => ({
            width:
              "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
            transition: "width var(--Transition-duration)",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "flex-end",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255 255 255 / 0.2)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundColor: "rgba(19 19 24 / 0.4)",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100dvh",
              width:
                "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
              maxWidth: "100%",
              px: 2,
            }}
          >
            <Box
              component="header"
              sx={{
                py: 3,
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
                <IconButton
                  variant="soft"
                  // color="primary"
                  size="sm"
                  onClick={onPressHome}
                >
                 
                  <Image  src={logo} 
                  alt={"image non disponible"} height={30} width={30}/>

                    {/* <BadgeRoundedIcon /> */}
                </IconButton>
                <Typography level="title-lg">{t('Public_layout_title')}</Typography>
              </Box>
              {/* <ColorSchemeToggle /> */}
            </Box>
            <Box
              component="main"
              sx={{

                my: is_center ? "auto" : undefined,
                py: 2,
                pb: 5,
                gap: 2,
                paddingBottom: -10,
                width: is_center ? 400 : "100%",
                maxWidth: "100%",
                mx: "auto",
                borderRadius: "sm",
                "& form": {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                },
                height: "100%",
                [`& .${formLabelClasses.asterisk}`]: {
                  visibility: "hidden",
                },
                display: is_center ? "flex" : undefined,
                flexDirection: is_center ? "column" : undefined,
                justifyContent: "center",
              }}
            >
              <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                  <Typography level="h3">{title}</Typography>
                </Stack>
              </Stack>
              <Stack gap={4} sx={{
                mt: 2,
                marginTop: is_center ? -2 : undefined,
                height: is_center ? undefined : "100%"
              }}>
                {children}
              </Stack>
            </Box>
          
            <Box component="footer" sx={{ py: 3, display: "flex", justifyContent: "center", maxWidth: '100%' }}>
              <Typography level="body-xs" textAlign="center">
                <a href={process.env.NEXT_PUBLIC_WEB_SITE_API} ><Button variant="plain">{t('Public_layout_footer')} {new Date().getFullYear()}</Button></a>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            height: "100%",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
            left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
            transition:
              "background-image var(--Transition-duration), left var(--Transition-duration) !important",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            backgroundColor: "background.level1",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${hero.src})`,
            [theme.getColorSchemeSelector("dark")]: {
              backgroundImage: `url(${hero.src})`,
            },
          })}
        />
      </div>
  );
};
export default View;
