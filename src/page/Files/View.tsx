'use client'
import {
  Alert, Box, Button, CssBaseline, CssVarsProvider, IconButton,
  LinearProgress,
  Link,
  Modal,
  Sheet,
  Snackbar,
  Table,
  Typography,
  iconButtonClasses
} from '@mui/joy';
import styles from "./styles.module.scss";
import { FileMetaOutput } from "@/services/openapi";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTime } from 'luxon';
import humanFileSize from '@/utils/humanFileSize';
import DeleteFile from './DeleteFile';
import ListMobile from './ListMobile';
import { Snack } from '@/types/snack';
import PrivateLayout from '@/components/PrivateLayout';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  change_page: (newPage: number) => void;
  truncateString: (str: string, limit: number) => string;
  onClickDeleteFile: (id: string) => void;
  downloadFileLink: (file: FileMetaOutput) => void;
  closeSnack: VoidFunction;
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;
  files: FileMetaOutput[],
  downloading: boolean;
  snack: Snack | null;
}

const View: React.FC<Props> = ({
  change_page,
  truncateString,
  onClickDeleteFile,
  downloadFileLink,
  closeSnack,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
  files,
  downloading,
  snack
}) => {
  const { t } = useTranslation()


  return (
    <PrivateLayout title={t('Files_Title')} >  
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: 'none', sm: 'flex' },
          // width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
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
              <th style={{ width: 80, padding: '12px 6px' }}>{t('Files_Name')}</th>
              <th style={{ width: 80, padding: '12px 6px' }}>{t('Files_Size')}</th>
              <th style={{ width: 80, padding: '12px 6px' }}>{t('Files_Created_On')}	</th>
              <th style={{ width: 60, padding: '12px 6px' }}></th>
              <th style={{ width: 60, padding: '12px 6px' }}></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>
                  <Typography level="body-xs">
                    {truncateString(file.name, 20)}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-xs">
                    {humanFileSize(file.size, true)}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-xs">
                    {DateTime.fromISO(file.created_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </Typography>
                </td>
                <td>
                  {/* <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}> */}
                  <Link
                    level="body-xs"
                    component="button"
                    onClick={() => {
                      downloadFileLink(file);
                    }}
                  >
                    {t('Files_Download')}
                  </Link>

                </td>
                <td >
                  <div>

                    <IconButton
                      onClick={() =>
                        onClickDeleteFile(file.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <ListMobile />
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        {current_page !== 1 ? (
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            startDecorator={<KeyboardArrowLeftIcon />}
            onClick={() => {
              change_page(current_page - 1)
            }}
          >
            {t('Files_Previous')}

          </Button>
        ) : <div style={{ width: 106 }}></div>}
        <Box sx={{ flex: 1 }} />
        {pages_to_display.map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) === current_page ? "outlined" : "plain"}
            color="neutral"
            onClick={() => {
              if (!isNaN(Number(page))) {
                change_page(Number(page))
              }
            }}
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />
        {Math.ceil(total_items / items_per_page) > current_page ? (
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            endDecorator={<KeyboardArrowRightIcon />}
            onClick={() => {
              change_page(current_page + 1)
            }}
          >
            {t('Files_Next')}

          </Button>
        ) : <div style={{ width: 106 }}></div>}
      </Box>
      {/* </Box> */}
      <DeleteFile />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={downloading}
        // onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
           {t('Files_Sheet_Download_Text1')}

          </Typography>
          <LinearProgress />
          <Typography id="modal-desc" textColor="text.tertiary">
              {t('Files_Sheet_Download_Text2')}

          </Typography>
        </Sheet>
      </Modal>
    </PrivateLayout>

  );
};
export default View;