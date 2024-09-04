"use client";
import PrivateLayout from "@/components/PrivateLayout";
import styles from "./styles.module.scss";
import { Box, Button, Link, Typography } from "@mui/joy";
import { Page } from "@/enums/pages.enum";

type Props = {
  coins: number;
};

const View: React.FC<Props> = ({ coins }) => {
  return (
    <PrivateLayout title="Payment successful">
      <Box>
        <Typography level="body-md" sx={{ fontWeight: "bold" }}>
          Thank You for Your Payment!
        </Typography>
        <Typography level="body-sm" sx={{ marginTop: 2, fontWeight: "bold" }}>
          Your transaction has been successfully completed, and a confirmation
          email is on its way to your inbox. We&apos;re thrilled to have you
          with us!
        </Typography>
        <Typography level="body-sm" sx={{ marginTop: 2, fontWeight: "bold" }}>
          Welcome to the premium experience, and thank you for choosing us!
        </Typography>
        <Typography sx={{ marginTop: 3, marginBottom: 3 ,fontWeight: "bold"}} level="body-md" color="primary">
          Your current Balance have now {coins} credits available to use
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Link href={Page.NEWLINK}>
            <Button>Create a premium link Now</Button>
          </Link>
        </Box>
      </Box>
    </PrivateLayout>
  );
};

export default View;
