"use client";
import { Box, Card, Typography } from "@mui/joy";
import styles from "./styles.module.scss";
import NewLinkStepper from "./NewLinkStepper";
import PrivateLayout from "@/components/PrivateLayout";
import NewLinkFlow from "./NewLinkFlow";
import BuyCredits from "../BuyCredits";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  noCoins: boolean;
};
const View: React.FC<Props> = ({
  noCoins
}) => {
  const {t} = useTranslation()
  return (
    <PrivateLayout title={t('new_link_title')}>
      {noCoins ? (
        <>
          <Typography>
            {t('new_link_Text1')}
          </Typography>
          <Card>
            <BuyCredits />
          </Card>
        </>
      ) : (
        <Card
          sx={{
            maxWidth: 500,
          }}
        >
          <NewLinkStepper />
          <NewLinkFlow  />
        </Card>
      )}
    </PrivateLayout>
  );
};
export default View;
