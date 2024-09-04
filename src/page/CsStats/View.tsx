"use client";
import { useMemo } from "react";
import styles from "./styles.module.scss";
import { AxisOptions, Chart } from "react-charts";
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  Typography,
  Checkbox,
} from "@mui/joy";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  data: any[];
  activeLinks: boolean;
  onChangeActiveLinks: VoidFunction;
  createdLinks: boolean;
  openningLinks: boolean;
  uniqueEmailSent: boolean;
  onChangeCreatedLinks: VoidFunction;
  onChangeOpenningLinks: VoidFunction;
  onChangeUniqueEmailSent: VoidFunction;
};

const View: React.FC<Props> = ({
  data,
  activeLinks,
  onChangeActiveLinks,
  createdLinks,
  openningLinks,
  uniqueEmailSent,
  onChangeCreatedLinks,
        onChangeOpenningLinks,
        onChangeUniqueEmailSent
}) => {
  const primaryAxis = useMemo(
    (): AxisOptions<any> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<any>[] => [
      {
        getValue: (datum) => datum.links,
      },
    ],
    []

    
    
    );
    const { t } = useTranslation()
  return (
    <CssVarsProvider disableTransitionOnChange>
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
          minWidth: 0,
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
              {t('Cs_Stats_Title')}

          </Typography>
        </Box>
        <Box
          sx={{
            height: "50dvh",
            maxWidth: 800,
            minHeight: 300,
          }}
        >
          {data.length > 0 && (
            <Chart
              options={{
                data,
                primaryAxis,
                secondaryAxes,
              }}
            />
          )}
        </Box>
        <Checkbox
          label= {t('Cs_Stats_Active_links')}
          checked={activeLinks}
          onChange={onChangeActiveLinks}
        />
        <Checkbox
          label={t('Cs_Stats_Created_links')}
          checked={createdLinks}
          onChange={onChangeCreatedLinks}
        />
        <Checkbox
          label= {t('Cs_Stats_Openning_links')}
          checked={openningLinks}
          onChange={onChangeOpenningLinks}
        />
        <Checkbox
          label={t('Cs_Stats_Unique email_sent')}
          checked={uniqueEmailSent}
          onChange={onChangeUniqueEmailSent}
        />
      </Box>
    </CssVarsProvider>
  );
};

export default View;
