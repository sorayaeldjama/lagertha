'use client'
import { Box, List, ListItem, ListItemContent, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import { ListDto_for_DeviceSessionOutput } from 'lagertha_js/dist/services/openapi';
import { DateTime } from 'luxon';
import ComputerIcon from '@mui/icons-material/Computer';
import Divider from '@mui/joy/Divider';
import { useTranslation } from '@/hooks/useTranslation';
import uap, { UAParser } from '@/ua-parser'


type Props = {
  logsList: ListDto_for_DeviceSessionOutput | null;
  // showLogs: VoidFunction;
  getBrowserName: (userAgents: string) => string;
  getUserDevice: (userAgents: string) => string;
  getUserOs: (userAgents: string) => string;
}

const View: React.FC<Props> = ({
  logsList,
  // showLogs
  getBrowserName,
  getUserDevice,
  getUserOs
}) => {

  const { t } = useTranslation();

  // const parser = new (UAParser as any)("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36");
  // const parserResults = parser.getResult();
  // console.log("hello2",parserResults.device)
  // console.log("hello", (uap as any)("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"));
  return (
    <div className={styles.logs}>
      {logsList?.items.map((log, index) => (
        <List
          key={index}
          size="sm"
          sx={{
            '--ListItem-paddingX': 0,
            display: "flex",
            justifyContent: 'center',
          }}
        >
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'start',
            }}
          >
            <ListItemContent sx={{ display: 'flex', flexDirection: "column" }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Typography sx={{ display: 'flex', fontWeight: "bold", }}>
                  <ComputerIcon sx={{ marginRight: 2 }} /> <Typography sx={{ fontWeight: "bold" }}> {log.ip}</Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Typography>
                  {t('Settings_Logs_Signed_In')}
                  <Typography sx={{ fontWeight: "bold" }}>
                    {DateTime.fromISO(log.created_at).toLocaleString(DateTime.DATETIME_MED)}
                  </Typography>
                </Typography>
              </Box>
              {/* <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Typography >
                  User ID :  <strong>{log.user_id}</strong>
                </Typography>
              </Box> */}
              {/* <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Typography >
                  Fingerprint:  <Typography sx={{fontWeight:"bold"}}> {log.fingerprint}</Typography>
                </Typography>
              </Box> */}
              <Box
                sx={{
                  display: 'flex',
                  // alignItems: 'center',
                  flexDirection: "column",
                  justifyContent: 'space-between',
                  gap: 0.5,
                  mb: 1,
                }}
              >

                <Typography sx={{ marginBottom: 0 }}>
                  {t('Settings_Logs_User_Agent')}

                  <Typography sx={{ fontWeight: "bold" }}>
                    {getBrowserName(log.user_agent)}

                  </Typography>
                </Typography>
                <Typography sx={{ marginBottom: 0 }}>
                    {t('Settings_Logs_Os')}

                  <Typography sx={{ fontWeight: "bold" }}>

                    {getUserOs(log.user_agent)}

                  </Typography>
                </Typography>
                {/* <Typography sx={{ marginBottom: 0 }}>
                 {t('Settings_Log_Device')}
                  <Typography sx={{ fontWeight: "bold" }}>

                    {getUserDevice(log.user_agent)}

                  </Typography>
                </Typography> */}


              </Box>
            </ListItemContent>
          </ListItem>
          <Divider></Divider>
        </List>
      ))}
    </div>
  );
};
export default View;


{/* <ListItem
sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  paddingBottom: 3
}}
>
<ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'end', justifyContent: 'space-between' }}>

  <div>
    <Typography fontWeight={600} gutterBottom>
      {truncateString(file.name, 20)}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 0.5,
        mb: 1,
      }}
    >
      <Typography level="body-md">{DateTime.fromISO(file.created_at).toLocaleString(
        DateTime.DATETIME_MED
      )}</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 0.5,
        mb: 1,
      }}
    >
      <Typography level="body-xs">
        {humanFileSize(file.size, true)}
      </Typography>
    </Box>
  </div>
  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
    <Button
      component="button"
      size="sm"
      onClick={() => {
        downloadFileLink(file);
      }}
    >
      Download
    </Button>
  </Box>

</ListItemContent>
</ListItem>
<ListDivider />
</List>
))} */}