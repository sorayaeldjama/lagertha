import React from "react";
import {
  Box,
  Button,
} from "@mui/joy";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import { Page } from "@/enums/pages.enum";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  // isTransferHomeOpen: boolean;
  coins: number;

};

const View: React.FC<Props> = ({ coins }) => {
  const drawerWidth = 240;
  const { t } = useTranslation()

  return (
  
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 800 }}>
          <Typography level="h1">
            {t('Dashboard_Title')}
          </Typography>

          <Typography level="body-lg">
            {t('Dashboard_Text1')}

          </Typography>
          <Typography level="body-lg">
            {t('Dashboard_Text2')}

          </Typography>
          <Typography level="body-lg">
            {t('Dashboard_Text3')}
          </Typography>
          <Typography level="h3">{t('Dashboard_Text4')}

          </Typography>
          <Typography
            startDecorator={
              <Box
                component="span"
                sx={{
                  bgcolor: "neutral.400",
                  width: "0.5em",
                  height: "0.5em",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <Typography> <Typography sx={{ fontWeight: "bold" }}>{t('Dashboard_Text5')}</Typography> <Typography>{t('Dashboard_Text6')}</Typography>

            </Typography></Typography>
          <Typography
            startDecorator={
              <Box
                component="span"
                sx={{
                  bgcolor: "neutral.400",
                  width: "0.5em",
                  height: "0.5em",
                  borderRadius: "50%",
                }}
              />
            }
            sx={{ display: 'flex', alignItems: 'center' }}          >
            <Typography> <Typography fontWeight="bold">{t('Dashboard_Text7')}</Typography>
              <Typography>{t('Dashboard_Text8')}</Typography>  </Typography>

          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: 800,
              display: "flex",
              justifyContent: "center",
              margin: 4,
            }}
          >
            {coins >= 100 ? (
              <Link href={Page.NEWLINK}>
                <Button>{t('Dashboard_Text9')}
                </Button>
              </Link>
            ) : (
              <Link href={Page.BUY_CREDITS}>
                <Button> {t('Dashboard_Text10')}
                </Button>
              </Link>
            )}
          </Box>
        </Card>
      </Box>
  );
};

export default View;
