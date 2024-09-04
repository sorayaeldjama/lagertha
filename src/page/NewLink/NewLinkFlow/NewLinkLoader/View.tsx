"use client";
import { InfoOutlined } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/joy";
import styles from "./styles.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {};

const View: React.FC<Props> = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 500,
      }}
    >
      <Box sx={{ marginTop: 8, marginBottom: 8 }}>
        <CircularProgress />
      </Box>
      <Typography startDecorator={<InfoOutlined />} mb={2}>
        {t('new_link_loader')}

      </Typography>
    </Box>
  );
};

export default View;
