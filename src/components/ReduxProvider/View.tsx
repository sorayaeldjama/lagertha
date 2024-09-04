"use client";
import store from "@/store";
import { Provider } from "react-redux";
import Securitywrapper from "./Securitywrapper";
import Layout from "@/components/Layout";
import { Box } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { OpenAPI } from "@/services/openapi/core/OpenAPI";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const View: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || "";
  }, []);

  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            50: process.env.NEXT_PUBLIC_PALETTE_LIGHT_50,
            100: process.env.NEXT_PUBLIC_PALETTE_LIGHT_100,
            200: process.env.NEXT_PUBLIC_PALETTE_LIGHT_200,
            300: process.env.NEXT_PUBLIC_PALETTE_LIGHT_300,
            400: process.env.NEXT_PUBLIC_PALETTE_LIGHT_400,
            500: process.env.NEXT_PUBLIC_PALETTE_LIGHT_500,
            600: process.env.NEXT_PUBLIC_PALETTE_LIGHT_600,
            700: process.env.NEXT_PUBLIC_PALETTE_LIGHT_700,
            800: process.env.NEXT_PUBLIC_PALETTE_LIGHT_800,
            900: process.env.NEXT_PUBLIC_PALETTE_LIGHT_900,
          }
        }
      },
      dark: {
        palette: {
          primary: {
            50: process.env.NEXT_PUBLIC_PALETTE_DARK_50,
            100: process.env.NEXT_PUBLIC_PALETTE_DARK_100,
            200: process.env.NEXT_PUBLIC_PALETTE_DARK_200,
            300: process.env.NEXT_PUBLIC_PALETTE_DARK_300,
            400: process.env.NEXT_PUBLIC_PALETTE_DARK_400,
            500: process.env.NEXT_PUBLIC_PALETTE_DARK_500,
            600: process.env.NEXT_PUBLIC_PALETTE_DARK_600,
            700: process.env.NEXT_PUBLIC_PALETTE_DARK_700,
            800: process.env.NEXT_PUBLIC_PALETTE_DARK_800,
            900: process.env.NEXT_PUBLIC_PALETTE_DARK_900,
          }
        }
      }
    }
  });
  return (
    <Provider store={store}>
      <CssVarsProvider disableTransitionOnChange defaultMode="system"
        theme={theme}
      >
        <CssBaseline />
        <Securitywrapper>
          <Box sx={{ display: "flex", minHeight: "100dvh", width: "100dvw" }}>
            <Layout>{children}</Layout>
          </Box>
        </Securitywrapper>
      </CssVarsProvider>
    </Provider>
  );
};

export default View;
