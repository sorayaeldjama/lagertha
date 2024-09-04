'use client'
import { downloadAllFiles, downloadFile } from '@/actions/link';
import humanFileSize from '@/utils/humanFileSize';
import { Box, Typography, Button, Sheet, Table, Link } from '@mui/joy';
import { DateTime } from 'luxon';
import styles from './styles.module.scss';
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  downloadFile: (file: FileMetaOutput) => void;
  downloadAllFiles: VoidFunction
  currentLink: LinkOutput;
}

const View: React.FC<Props> = ({
  currentLink,
  downloadFile,
downloadAllFiles
}) => {

  const { t } = useTranslation()
  return (
    <Box sx={{
    }}>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          // flexDirection: { xs: "row", sm: "row" },
          // alignItems: { xs: "center", sm: "center" },
          // flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          {t('Link__List_Files_Pc1')}
        </Typography>
        <Button
          color="primary"
          startDecorator={<DownloadRoundedIcon />}
          size="sm"
          onClick={downloadAllFiles}
        >
          {t('Link__List_Files_Pc2')}
        </Button>
      </Box>
      <Box sx={{
        display: "flex",
        mb: 1,
        gap: 1,
        flexDirection: { sm: "row" },
        marginLeft: 0.5,
        alignItems: "center",
        marginBottom: { md: 4 }
      }}
      >
        <Typography >
          {t('Link__List_Files_Pc3')}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {DateTime.fromISO(currentLink.expired_at as string).toLocaleString(
            DateTime.DATETIME_MED
          )}</Typography>
      </Box>
      <Box
      >
        <Sheet
          className="OrderTableContainer"
          variant="outlined"
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Table
            aria-labelledby="tableTitle"
            stickyHeader
            hoverRow
            sx={{
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
              "--Table-headerUnderlineThickness": "1px",
              "--TableRow-hoverBackground":
                "var(--joy-palette-background-level1)",
              "--TableCell-paddingY": "4px",
              "--TableCell-paddingX": "8px",
            }}
          >
            <thead>
              <tr>
                <th style={{ width: 140, padding: "12px 6px" }}>{t('Link__List_Files_Pc4')}</th>
                <th style={{ width: 80, padding: "12px 6px" }}>{t('Link__List_Files_Pc5')}</th>
                <th style={{ width: 140, padding: "12px 6px" }}>
                     {t('Link__List_Files_Pc6')}

                </th>
                <th style={{ width: 140, padding: "12px 6px" }}> </th>
              </tr>
            </thead>
            <tbody>
              {currentLink.files?.map((file) => (
                <tr key={file.id} >
                  <td>{file.name}</td>
                  <td>{humanFileSize(file.size, true)}</td>
                  <td>
                    {DateTime.fromISO(file.created_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </td>
                  <td>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Link
                        level="body-xs"
                        component="button"
                        onClick={() => {
                          downloadFile(file);
                        }}
                      >
                          {t('Link__List_Files_Pc7')}
                      </Link>
                    </Box>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Box>
    </Box>
  );
};

export default View;