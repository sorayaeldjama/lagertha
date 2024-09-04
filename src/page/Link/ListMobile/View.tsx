'use client'
import { Box, List, ListItem, ListItemContent, Typography, ListDivider, Sheet, Button, Alert } from '@mui/joy';
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import { DateTime } from 'luxon';
import humanFileSize from '@/utils/humanFileSize';
import { useTranslation } from '@/hooks/useTranslation';


type Props = {
  downloadFile: (file: FileMetaOutput) => void;
  currentLink: LinkOutput;
  downloading: boolean;
}

const View: React.FC<Props> = ({
  downloadFile,
  currentLink,
  downloading,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <div style={{
      }}>
        <Sheet sx={{
          display: { xs: 'block', sm: 'none' },
          width: '100%',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
          paddingBottom: 2,
          // marginBottom: 40,
          justifyContent: "space-between",
          marginTop: 4
        }}>
          {currentLink.files?.map((file) => (
            <List
              key={file.id}
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
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  paddingBottom: 3
                }}
              >
                <ListItemContent sx={{
                  display: 'flex',
                  gap: 2, alignItems: 'end',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <Typography fontWeight={600} gutterBottom>
                      {file.name}
                    </Typography>
                    <Typography level="body-xs" gutterBottom>
                      {humanFileSize(file.size, true)
                      }
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
                      <Typography level="body-xs">{DateTime.fromISO(file.created_at).toLocaleString(
                        DateTime.DATETIME_MED
                      )}</Typography>
                    </Box>
                  </div>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Button
                      component="button"
                      size="sm"
                      onClick={() => {
                        downloadFile(file);
                      }}
                    >
                     {t('Link_Button_Dowload')}

                    </Button>
                  </Box>
                </ListItemContent>
              </ListItem>
              <ListDivider />
            </List>
          ))}
        </Sheet>
      </div>
    </>
  );
};

export default View;