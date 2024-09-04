'use client'
import { Box, Typography, Tooltip, IconButton } from '@mui/joy';
import styles from './styles.module.scss';
import DoneIcon from "@mui/icons-material/Done";
import KeyIcon from '@mui/icons-material/Key';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onClickCopy: VoidFunction;
  isLinkPasswordCopied: boolean;
  linkPassword: string;

}

const View: React.FC<Props> = ({
  onClickCopy,
  isLinkPasswordCopied,
  linkPassword
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
    <div className={styles.copytooltip}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
            <KeyIcon />
            <Typography level="body-sm">{linkPassword}</Typography>
          </Box>
          <Tooltip
            placement="right"
            title={tooltipContent}
            color={isLinkPasswordCopied ? 'success' : "neutral"}
          >
            <IconButton
              onClick={onClickCopy}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
};

export default View;