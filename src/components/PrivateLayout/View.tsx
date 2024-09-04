"use client";
import { CssVarsProvider, CssBaseline, Box, Typography } from "@mui/joy";
import styles from "./styles.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  children: React.ReactNode;
  title: string;
};

const View: React.FC<Props> = ({ children, title, }) => {
const {t} = useTranslation()
  return (
    <CssVarsProvider disableTransitionOnChange  defaultMode="system" >
      <CssBaseline />
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography level="h2" component="h1">
            {t(title)}
          </Typography>
          <>
          
          </>
        </Box>
        {children}
      </Box>
    </CssVarsProvider>
  );
};

export default View;
