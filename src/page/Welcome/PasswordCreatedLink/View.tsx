import React from 'react';
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
  Tooltip,
  Typography,
} from '@mui/joy';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CopyLinkPassword from './CopyLinkPassword';
import DoneIcon from "@mui/icons-material/Done";
import { useTranslation } from '@/hooks/useTranslation';


type Props = {
  onCloseConfirmCreateNewLink: VoidFunction;
  onAgreeCreateNewLink: VoidFunction;
  onClickCreateNewLink: VoidFunction;
  isConfirmCreateNewLink: boolean;
  isLinkPasswordCopied: boolean;
  isCguShown: boolean;
};

const View: React.FC<Props> = ({
  onCloseConfirmCreateNewLink,
  onAgreeCreateNewLink,
  onClickCreateNewLink,
  isConfirmCreateNewLink,
  isLinkPasswordCopied,
  isCguShown
}) => {
  const { t } = useTranslation();


  const tooltipContent = (
    <>
      {isLinkPasswordCopied ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DoneIcon htmlColor='#fff' fontSize="small" />
          <span>
          {t('Welcome_Password_Created_Link_Copy_Link_Password_Copied')}

          </span>
        </Box>
      ) : (
        <span> {t('Welcome_Password_Created_Link_Copy_Link_Password_Copy')}</span>
      )
      }
    </>
  );

  return (
    <div>
      <>
        <Alert
          sx={{ alignItems: 'flex-start' }}
          variant="soft"
          color="success"
          startDecorator={<ReportIcon />}
        >
          <div>
            <div>{t('Welcome_Password_Created_Link_Title')}</div>

            <Typography level="body-sm" color="success">
              {t('Welcome_Password_Created_Link_Texte')}
            </Typography>
          </div>
        </Alert>
        <CopyLinkPassword />

        <Alert
          sx={{ alignItems: 'flex-start', marginBottom: 2 }}
          variant="soft"
          color="warning"
          startDecorator={<WarningIcon />}
        >
          <div>
            <div>{t('Welcome_Password_Created_Link_Texte2')}</div>
            <Typography level="body-sm" sx={{ marginTop: 2 }}>
              {t('Welcome_Password_Created_Link_Texte3')}
            </Typography>
          </div>
        </Alert>
        <Button onClick={onClickCreateNewLink} sx={{ marginTop: 2 }} fullWidth>
          {t('Welcome_Password_Created_Link_Texte4')}

        </Button>
      </>
      <Modal open={isConfirmCreateNewLink}
        onClose={() => onCloseConfirmCreateNewLink}>
        <ModalDialog variant="outlined" role="alertdialog" maxWidth="sm" >
          <DialogTitle>
            <WarningRoundedIcon />
            {t('Welcome_Password_Created_Link_Texte5')}

          </DialogTitle>
          <Divider />
          <DialogContent >
            <Typography level="body-md" >
              {t('Welcome_Password_Created_Link_Texte6')}
            </Typography>
            <Typography level="body-md" ></Typography>
            <Typography level="body-md" >
              {t('Welcome_Password_Created_Link_Texte7')}
            </Typography>
            <CopyLinkPassword />
          </DialogContent>
          <DialogActions >
            <Button variant="solid" color="primary" onClick={onAgreeCreateNewLink}>
                {t('Welcome_Password_Created_Link_Yes')}

            </Button>
            <Tooltip title={tooltipContent} color={isLinkPasswordCopied ? "success" : "neutral"}>
              <Button variant="plain" color="neutral" onClick={onCloseConfirmCreateNewLink}>
                  {t('Welcome_Password_Created_Link_No')}

              </Button>
            </Tooltip>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </div >
  );
};
export default View;
