'use client'

import { ParameterOutput } from "@/services/openapi";
import { Tabs, TabList, Tab, TabPanel, Box, Chip, tabClasses } from "@mui/joy";
import Security from "../Security";
import Parameters from "../Parameters";
import Logs from "../Logs";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  capitalizeFirstLetter: (str: string) => string;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  settingsParams: ParameterOutput[] | null;
  index: number;
}

const View: React.FC<Props> = ({
  capitalizeFirstLetter,
  settingsParams,
  index,
  setIndex

}) => {
  const { t } = useTranslation()
  return (

    
    <Box
      sx={{
        // flexGrow: 1,
        // m: -2,
        // overflowX: 'hidden',
        position: 'relative',
        zIndex: 1,
        maxWidth: 500

      }}
    >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
        sx={{
        }}
      >
        <TabList
          sx={{
            pt: 1,
            justifyContent: 'flex-start',
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
          {t('Settings_App_Bar_Parameter')} {' '}   


          </Tab>
          <Tab indicatorInset>
          {t('Settings_App_Bar_Security')}{' '}  

          </Tab>
          <Tab indicatorInset>
          {t('Settings_App_Bar_Logs')}{' '} 
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        >
          <TabPanel value={0}><Parameters /></TabPanel>
          <TabPanel value={1}><Security /></TabPanel>
          <TabPanel value={2}><Logs /></TabPanel>
        </Box>
      </Tabs>
    </Box>

  );
};

export default View;