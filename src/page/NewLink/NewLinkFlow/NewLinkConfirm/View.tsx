"use client";
import truncateString from "@/utils/trucateString";
import { Box, Alert, Typography, Tooltip, IconButton, Button } from "@mui/joy";
import Link from "next/link";
import styles from "./styles.module.scss";
import ReportIcon from "@mui/icons-material/Report";
import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SendByEmail from "./SendByEmail";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  createdLink: string;
  isLinkCopied: boolean;
  password: string | null;
  onClickLink: VoidFunction;
  revealPassword: boolean;
  onClickReveal: VoidFunction;
  onClickCreateNewLink: VoidFunction;
  onClickSendLinkByEmail: VoidFunction;
  isPasswordCopied: boolean;
  onClickPassword: VoidFunction
};

const View: React.FC<Props> = ({
  createdLink,
  isLinkCopied,
  password,
  onClickLink,
  revealPassword,
  onClickReveal,
  onClickCreateNewLink,
  onClickSendLinkByEmail,
  isPasswordCopied,
  onClickPassword
}) => {
  const { t } = useTranslation()

  const tooltipContent = (copied: boolean) => (
    <>
      {copied ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <DoneIcon htmlColor="#fff" fontSize="small" />
          <span>{t('new_link_Confirm_Copied')}</span>             

        </Box>
      ) : (
        <span>  {t('new_link_Confirm_Copy')}</span>          

      )}
    </>
  );

  return (
    <>
      <SendByEmail />
      <Box
        sx={{
          display: "flex",
          maxWidth: 500,
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
          minHeight: 250,
        }}
      >
        <Box>
          <Alert
            sx={{
              alignItems: "flex-start",
              width: "100%",
              marginBottom: 2,
            }}
            variant="soft"
            color="success"
            startDecorator={<ReportIcon />}
          >
            <Typography level="body-md">
              {t('new_link_Confirm_Alert')}
            </Typography>
          </Alert>
          <Typography level="title-md" sx={{ fontWeight: "bold" }}>
             {t('new_link_Confirm_Title_Link')}

          </Typography>
          <Box
            sx={{
              // p: 4,
              display: { sx: "non", md: "flex" },
              gap: 2,
              borderRadius: { md: 8 },
              flexDirection: { md: "row" },
              alignItems: "center",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Link href={createdLink} target="_blank">
              <Typography
                level="title-md"
                color="primary"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                {truncateString(createdLink, 40)}
              </Typography>
            </Link>
            <Tooltip
              title={tooltipContent(isLinkCopied)}
              color={isLinkCopied ? "success" : "neutral"}
            >
              <IconButton onClick={onClickLink}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Button
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onClick={onClickSendLinkByEmail}
          >
            {t('new_link_Confirm_Title_Send_Link')}

          </Button>
          <Typography level="title-md" sx={{ fontWeight: "bold" }}>
             {t('new_link_Confirm_Password')}

          </Typography>
          <Box
            sx={{
              // p: 4,
              display: { sx: "non", md: "flex" },
              gap: 2,
              borderRadius: { md: 8 },
              flexDirection: { md: "row" },
              alignItems: "center",
              justifyContent: { xs: "space-between" },
              marginBottom: 2,
            }}
          >
            <Tooltip
              title={tooltipContent(isPasswordCopied)}
              color={isPasswordCopied ? "success" : "neutral"}
            >
              <Typography
                level="title-md"
                color="neutral"
                onClick={onClickPassword}
                sx={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginTop: 1,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.7,
                  },
                  "&:active": {
                    opacity: 0.5,
                  },
                }}
              >
                {revealPassword
                  ? password || ""
                  : password?.replaceAll(/./g, "*") || ""}
              </Typography>
            </Tooltip>
            <IconButton onClick={onClickReveal}>
              {revealPassword ? (
                <Tooltip title="Hide">
                  <VisibilityOffIcon />
                </Tooltip>
              ) : (
                <Tooltip title="Reveal">
                  <VisibilityIcon />
                </Tooltip>
              )}
            </IconButton>
          </Box>
          <Alert variant="soft" color="neutral" startDecorator={<ReportIcon />}>
          {t('new_link_Confirm_Alert2')}
          </Alert>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: 500,
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          <Button
            onClick={onClickCreateNewLink}
            variant="solid"
            color="primary"
          >
            {t('new_link_Button')}

          </Button>
        </Box>
      </Box>
    </>
  );
};

export default View;
