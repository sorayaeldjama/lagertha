"use client";
import {
  Box,
  Button,
  Card,
  Divider,
  Link,
  Typography,
  SvgIcon,
  styled,
  List,
  ListItem,
  CircularProgress,
  IconButton,
  Checkbox,
} from "@mui/joy";
import styles from "./styles.module.scss";
import PublicLayout from "@/components/PublicLayout";
import { Page } from "@/enums/pages.enum";
import DoneIcon from "@mui/icons-material/Done";
import SyncIcon from "@mui/icons-material/Sync";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import EmailCreatedLink from "./EmailCreatedLink";
import PasswordCreatedLink from "./PasswordCreatedLink";
import AlertErrorsfile from "./AlertErrorsfile";
import truncateString from "@/utils/trucateString";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AlertUploadErrorsfile from "./AlertUploadErrorsfile";
import { DividerRoot } from "@mui/joy/Divider/Divider";
import AcceptCgu from "./AcceptCgu";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { display } from "@mui/system";
import { useTranslation } from "@/hooks/useTranslation";

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
type Props = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createLink: VoidFunction;
  deletedSelectedFile: VoidFunction;
  onClickUploadFile: VoidFunction;
  onClickIReadCgu: (e: React.BaseSyntheticEvent) => void;
  onClickReadCgu: VoidFunction;
  selectedFile: File | null;
  uploadLoading: boolean | null;
  encryptionLoading: boolean | null;
  linkLoading: boolean | null;
  // createdLink: string | null;
  // linkPassword: string;
  // emailSendLink: string;
  isLinkPasswordOpen: boolean;
  isLinkEmailOpen: boolean;
  showLoader: boolean;
  fileName: string | null;
  fileSize: string | null;
  isCguChecked: boolean;
  isGetLinkDisabled: boolean;
  isSecondPanel: boolean;
  isConfirmCguOpen: boolean;
  isCguShown: boolean;
};

const View: React.FC<Props> = ({
  handleFileChange,
  createLink,
  deletedSelectedFile,
  onChangeCheck,
  onClickReadCgu,
  onClickIReadCgu,
  onClickUploadFile,
  selectedFile,
  uploadLoading,
  encryptionLoading,
  linkLoading,
  // createdLink,
  // linkPassword,
  // emailSendLink,
  isLinkPasswordOpen,
  isLinkEmailOpen,
  showLoader,
  fileName,
  fileSize,
  isSecondPanel,
  isCguChecked,
  isGetLinkDisabled,
  isConfirmCguOpen,
  isCguShown,
}) => {
  const { t } = useTranslation()

  return (

    <PublicLayout title={t('Welcome_Title')}>

      <Box sx={{ display: "flex", flexDirection: "column", }}>
        <Typography level="body-md" sx={{ marginBottom: 4 }}>
          {t('Welcome_Text1')}
        </Typography>
        <Card>
          <Stepper sx={{ width: "100%", marginBottom: 2 }} size="sm">
            <Step
              indicator={
                <StepIndicator variant="solid" color="primary">
                  1
                </StepIndicator>
              }
              orientation="vertical"
              sx={{
                "&::after": {
                  ...(isSecondPanel && { bgcolor: "primary.solidBg" }),
                },
              }}
            >
              {t('Welcome_Stepper1')}

            </Step>
            <Step
              indicator={
                <StepIndicator
                  variant={isSecondPanel ? "solid" : "soft"}
                  color="primary"
                >
                  2
                </StepIndicator>
              }
              sx={{
                "&::after": {
                  ...(isLinkPasswordOpen &&
                    !isLinkEmailOpen &&
                    isSecondPanel && { bgcolor: "primary.solidBg" }),
                },
              }}
              orientation="vertical"
            >
              {t('Welcome_Stepper2')}
            </Step>
            <Step
              indicator={
                <StepIndicator
                  variant={
                    isLinkPasswordOpen && !isLinkEmailOpen && isSecondPanel
                      ? "solid"
                      : "soft"
                  }
                  color="primary"
                >
                  3
                </StepIndicator>
              }
              orientation="vertical"
            >
              {t('Welcome_Stepper3')}
            </Step>
          </Stepper>
          {uploadLoading !== null ||
            encryptionLoading !== null ||
            linkLoading !== null ? (
            <>
              <List>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography level="body-xs">{t('Welcome_Text2')}</Typography>
                  {encryptionLoading === null && <HourglassBottomIcon />}
                  {encryptionLoading === true && <SyncIcon color="primary" />}
                  {encryptionLoading === false && <DoneIcon color="success" />}
                </ListItem>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography level="body-xs">{t('Welcome_Text3')}</Typography>
                  {uploadLoading === null && <HourglassBottomIcon />}
                  {uploadLoading === true && <SyncIcon color="primary" />}
                  {uploadLoading === false && <DoneIcon color="success" />}
                </ListItem>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography level="body-xs">  {t('Welcome_Text4')}</Typography>
                  {linkLoading === null && <HourglassBottomIcon />}
                  {linkLoading === true && <SyncIcon color="primary" />}
                  {linkLoading === false && <DoneIcon color="success" />}
                </ListItem>
              </List>
              <>
                {showLoader ? (
                  <div className={styles.loader}>
                    <CircularProgress />
                  </div>
                ) : isLinkPasswordOpen && !isLinkEmailOpen ? (
                  <PasswordCreatedLink />
                ) : (
                  <EmailCreatedLink />
                )}
              </>
            </>
          ) : (
            <>
              <Button
                className={styles.textfield}
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color={selectedFile ? 'primary' : "neutral"}
                startDecorator={
                  <>
                    {selectedFile ?
                      <ElectricBoltIcon />
                      :
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
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 
                        0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </SvgIcon>
                    }
                  </>} >
                {selectedFile ?
                  (<>
                    <Typography color="primary"> {t('Welcome_Text5')}
                    </Typography>
                    <VisuallyHiddenInput type='button' onClick={onClickUploadFile} />
                  </>
                  ) : (
                    <>
                      <Typography> {t('Welcome_Text6')}
                      </Typography>
                      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                    </>
                  )}
              </Button>
              <AlertErrorsfile />
              <AlertUploadErrorsfile />
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}  >
                <Typography level="body-xs"> {t('Welcome_Text7')}
                </Typography>
                <Link sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  href={Page.SIGNUP}>
                  <ElectricBoltIcon />
                  <Typography level="body-xs" color="primary"
                    sx={{ fontWeight: 'bold' }}>  {t('Welcome_Text8')}
                  </Typography>
                </Link>
              </Box>
              {fileName && fileSize && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography level="body-sm">
                    {truncateString(fileName, 30)} - {fileSize}
                  </Typography>
                  <IconButton color="neutral" onClick={deletedSelectedFile}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
              )}
              {isCguShown && (
                <>
                  <Box sx={{ alignItems: "flex-start", gap: 2 }}>
                    <Checkbox
                      checked={isCguChecked}
                      onChange={onChangeCheck}
                      size="sm"
                      label={t('Welcome_Text9')} />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        onClick={onClickReadCgu}
                        level="body-sm"
                        sx={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          "&:hover": {
                            opacity: 0.7
                          }, "&:active": {
                            opacity: 0.5
                          }
                        }}
                        color="primary"
                      >
                        {t('Welcome_Text10')}
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}
              <Divider />
              {/* <AccordionGroup>
              <Accordion>
                <AccordionSummary>
                  <Box sx={{ display: "flex" }}>
                    <BoltIcon color="primary" />
                    <Typography level="body-xs">Premium features</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <List marker="circle">
                    <ListItem>
                      <Typography level="body-xs">Max size 2go</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography level="body-xs">
                        Password link protection
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography level="body-xs">Dashboard access</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography level="body-xs">
                        Unlimited link lifetime
                      </Typography>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </AccordionGroup> */
              }
              <Button onClick={createLink} disabled={isGetLinkDisabled} >
                 {t('Welcome_Text11')}
              </Button>
              <Box display={'flex'} justifyContent={'center'}>
                <Link href={Page.SIGNUP} >
                  <ElectricBoltIcon sx={{ marginRight: 0.5 }} />

                  <Typography level="body-xs" color="primary" sx={{ fontWeight: 'bold' }}>
                   {t('Welcome_Text12')}

                  </Typography>
                </Link>
              </Box>
              <Link href={Page.LOGIN}>
                <Typography level="body-xs">
                {t('Welcome_Text13')}{" "}          

                </Typography>
              </Link>
            </>
          )}
        </Card>
        <AcceptCgu />
      </Box>
    </PublicLayout>
  );
};
export default View;
