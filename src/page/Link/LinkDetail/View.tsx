"use client";
import { FileMetaOutput, LinkOutput } from "@/services/openapi";
import {
  Box,
  Sheet,
  Typography,
  Modal,
  LinearProgress,
} from "@mui/joy";
import ListMobile from "../ListMobile";
import CreateNewLinkAlert from "./CreateNewLinkAlert";
import Divider from '@mui/joy/Divider';
import ListFilesPc from "./ListFilesPc";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  downloadAllFiles: VoidFunction
  downloadFile: (file: FileMetaOutput) => void;
  currentLink: LinkOutput;
  downloading: boolean;
};

const View: React.FC<Props> = ({
  downloadAllFiles,
  downloadFile,
  currentLink,
  downloading,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <Box
        component="main"
        sx={{

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // alignItems: 'flex-end',
          position: 'relative',
          minHeight: '100%',
        }}
      // sx={{ minHeight: "calc(100dvh -1000px)",
      // //  background: '#f0f'
      // }}
      >
        <Box sx={{
          // marginBottom: { md: 40, xs: 20 } 
        }} >
          <ListFilesPc />
          <ListMobile />
        </Box>
        <Box sx={{
          alignSelf: "flex-end",
        }}
        >
          <Divider
            sx={{
              width: { md: '100%', sx: 10 },
              marginBottom: 4, marginTop: 4
            }}
          />
          <CreateNewLinkAlert />
        </Box>
      </Box>
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
            {t('Link__Details_Text1')}
          </Typography>
          <LinearProgress />
          <Typography id="modal-desc" textColor="text.tertiary">
            {t('Link__Details_Text2')}

          </Typography>
        </Sheet>
      </Modal>
    </>
  );
};

export default View;
