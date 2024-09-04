"use client";
import { useMemo } from "react";
import { Chart,AxisOptions  } from 'react-charts'
import styles from "./styles.module.scss";
import { Box, CssBaseline, CssVarsProvider, Typography } from "@mui/joy";
import { useTranslation } from "@/hooks/useTranslation";


type Props = {
  data: any[];
  totalMemory: string;
  memoryUsed: string;
};

const View: React.FC<Props> = ({ data, memoryUsed, totalMemory }) => {
  const primaryAxis = useMemo(

    (): AxisOptions<any> => ({
      getValue: (datum ) => datum.index,
      formatters: {
        tooltip: (info: any) => info + " sec",
      },
    }),
    []
    
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<any>[] => [
      {
        getValue: (datum) => datum.value,
        min: 0,
        max: 100,
        stacked: true,
        formatters: {
          tooltip: (info: any) => parseFloat(info).toFixed(2) + " %",
        },
      },
    ],
    []
  );
  const { t } = useTranslation();

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
            {t('Admin_System_Title')}
          </Typography>
        </Box>
        <Typography level="title-md">{t('Admin_System_RAM_Used')}</Typography>
        <Typography level="body-xs">{t('Admin_System_Total_Momory')}{totalMemory}</Typography>
        <Typography level="body-xs">{t('Admin_System_Used_Memory')}{memoryUsed}</Typography>
        <Box
          sx={{
            maxWidth: 300,
            minHeight: 100,
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
      </Box>
    </CssVarsProvider>
  );
};

export default View;
