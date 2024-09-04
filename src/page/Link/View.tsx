"use client";
import styles from "./styles.module.scss";
import { useSearchParams } from "next/navigation";
import CircularProgress from "@mui/joy/CircularProgress";
import LinkDetail from "./LinkDetail";
import { LinkOutput } from "@/services/openapi";
import PasswordInput from "./PasswordInput";
import PublicLayout from "@/components/PublicLayout";
import { Box, Divider, Stack } from "@mui/joy";
import { relative } from "path";
import CreateNewLinkAlert from "./LinkDetail/CreateNewLinkAlert";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  uuid: string;
  loading: boolean;
  currentLink: null | LinkOutput;
  password_need: boolean;
};

const View: React.FC<Props> = ({
  uuid,
  loading,
  currentLink,
  password_need,
}) => {
  // étape 1 verifié si possible de connecter LG avec le username/password

  // si OK alors recuperer le lien

  // sinon demander le password

  return (
    <PublicLayout title="" is_center={false}>
      <Box
        sx={{
          position: "relative",
          display: 'flex',
          justifyContent: "center",
          height: "100%"
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {!password_need && currentLink ? (
              <>
                <LinkDetail />
              </>
            ) : (
              <PasswordInput uuid={uuid} />
            )}
          </>
        )}
      </Box>
    </PublicLayout>
  );
};

export default View;
