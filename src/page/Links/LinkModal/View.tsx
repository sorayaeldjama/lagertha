"use client";
import {
  FileMetaOutput,
  LinkOpenningOutput,
  LinkOutput,
  LinkSendOutput,
} from "@/services/openapi";
import styles from "./styles.module.scss";
import {
  ModalDialog,
  Modal,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Table,
  List,
  ListItem,
  Typography,
  Tabs,
  TabList,
  Tab,
  ListItemDecorator,
  TabPanel,
  ListItemContent,
} from "@mui/joy";
import { DateTime } from "luxon";
import { ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import truncateString from "@/utils/trucateString";
import FolderIcon from "@mui/icons-material/Folder";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import humanFileSize from "@/utils/humanFileSize";
import { VisibilityOffOutlined, VisibilityRounded } from "@mui/icons-material";
import GetAppIcon from '@mui/icons-material/GetApp';
import { useTranslation } from "@/hooks/useTranslation";
type Props = {
  currentLink: LinkOutput | null;
  onClose: VoidFunction;
  opennings: LinkOpenningOutput[];
  files: FileMetaOutput[];
  links_sent: LinkSendOutput[];
};

const View: React.FC<Props> = ({
  currentLink,
  onClose,
  opennings,
  files,
  links_sent,
}) => {
  const {t} = useTranslation()

  return (
    <Modal open={!!currentLink} onClose={onClose}>
      <ModalDialog minWidth="sm" sx={{ height: { xs: "60%", md: "100%" } }}>
        <DialogTitle>{t('Links_Link_Modal_Title')}</DialogTitle>
        <DialogContent>
          <Tabs size="sm">
            <TabList sticky="top" color="primary">
              <Tab> {t('Links_Link_Modal_Info')}</Tab>
              <Tab> {t('Links_Link_Modal_Files')}</Tab>
              <Tab> {t('Links_Link_Modal_Opennings')}</Tab>
              <Tab>{t('Links_Link_Modal_Email')}</Tab>
            </TabList>
            <TabPanel value={0}>
              <List>
                <ListItem>
                  <ListItemDecorator>{t('Links_Link_Modal_name')} </ListItemDecorator>
                  <ListItemText sx={{ fontWeight: "bold", marginLeft: 2 }}>
                    {currentLink?.name}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemDecorator> {t('Links_Link_Modal_CreatedDate')}</ListItemDecorator>
                  <ListItemText sx={{ fontWeight: "bold", marginLeft: 2 }}>
                    {DateTime.fromISO(
                      currentLink?.created_at || ""
                    ).toLocaleString(DateTime.DATETIME_MED)}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemDecorator>{t('Links_Link_Modal_Expiration')} </ListItemDecorator>
                  <ListItemText sx={{ fontWeight: "bold", marginLeft: 2 }}>
                    {currentLink?.expired_at
                      ? DateTime.fromISO(currentLink.expired_at).toLocaleString(
                          DateTime.DATETIME_MED
                        )
                      : "-"}
                  </ListItemText>
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel value={1}>
              <List>
                {files.map((file) => (
                  <ListItem key={file.id}>
                    <ListItemDecorator>
                      <FolderIcon />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="body-sm">
                        {truncateString(file.name, 50)}
                      </Typography>
                      <Typography level="body-xs">
                        {humanFileSize(file.size, true)}
                      </Typography>
                    </ListItemContent>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value={2}>
              <List>
                {opennings.map((openning) => (
                  <ListItem key={openning.id}>
                    <ListItemDecorator>
                      <GetAppIcon />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="body-sm">
                        {DateTime.fromISO(openning.openning_date).toLocaleString(
                          DateTime.DATETIME_MED
                        )}
                      </Typography>
                      </ListItemContent>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel value={3}>
              <List>
                {links_sent.map((send) => (
                  <ListItem key={send.id}>
                    <ListItemDecorator>
                      <AlternateEmailIcon />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="body-sm">{send.email}</Typography>
                      <Typography level="body-xs">
                        {DateTime.fromISO(send.created_at).toLocaleString(
                          DateTime.DATETIME_MED
                        )}
                      </Typography>
                    </ListItemContent>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </Tabs>
        </DialogContent>
        <DialogActions>
          <Box>
            <Button onClick={onClose}>{t('Links_Link_Modal_Close')}</Button>
          </Box>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};

export default View;
