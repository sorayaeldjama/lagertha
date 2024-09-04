"use client";
import {
  Alert,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  SvgIcon,
  Typography,
  styled,
} from "@mui/joy";
import styles from "./styles.module.scss";
import humanFileSize from "@/utils/humanFileSize";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ClearIcon from "@mui/icons-material/Clear";
import ReportIcon from "@mui/icons-material/Report";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  OnClickDeleteFile: (index: number) => void;
  selectedFiles: File[];
  uploadFileError: boolean;
};
const View: React.FC<Props> = ({
  handleFileChange,
  OnClickDeleteFile,
  selectedFiles,
  uploadFileError,
}) => {
  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.newlinkuploadfile}>
        <Box sx={{ marginBottom: 2 }}>
          {uploadFileError && (
            <Alert
              sx={{ alignItems: "flex-start" }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
            >
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  {t('new_link_New_Link_Upload_File_Alert')}
                </Typography>
              </div>
            </Alert>
          )}
        </Box>
        <Button
          className={styles.textfield}
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          {selectedFiles.length > 0 ? t('new_link_New_Link_Upload_File_Button_Upload another_file') : t('new_link_New_Link_Upload_File_Button_Upload_a_file') }          

          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>
        <Typography level="body-xs" sx={{marginTop: 1}}>{t('new_link_New_Link_Upload_File_Max_Size')}</Typography>
        <List sx={{ marginTop: 4 }}>
          {selectedFiles.map((file, index) => (
            <ListItem key={index}>
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItemContent className={styles.list} sx={{ marginLeft: 2 }}>
                  <Box className={styles.box}>
                    <FilePresentIcon
                      sx={{ fontSize: "2rem", opacity: 0.2, marginRight: 1 }}/>
                    <Typography level="body-sm">{file.name}</Typography>
                    <Typography level="body-xs" sx={{ marginLeft: 1 }}>
                      {humanFileSize(Number(file.size), true)}
                    </Typography>
                  </Box>
                </ListItemContent>
                <ClearIcon onClick={() => OnClickDeleteFile(index)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
export default View;
