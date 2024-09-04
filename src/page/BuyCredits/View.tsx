"use client";
import PrivateLayout from "@/components/PrivateLayout";
import styles from "./styles.module.scss";
import { Box, Typography, Card, CardContent, Button } from "@mui/joy";
import { ProductOutput } from "@/services/openapi";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  products: ProductOutput[];
  onSelectProduct: (productId: string) => VoidFunction;
  coins: number
};

const View: React.FC<Props> = ({ products, onSelectProduct, coins }) => {
  const { t } = useTranslation()

  return (
    <PrivateLayout title={t('Buy_Credits_Title')}>
      <Typography level="title-md" sx={{fontWeight: "bold",}} color="primary">{t('Buy_Credits_Text1')} {coins} {t('Buy_Credits_Text2')}
</Typography>
      <Typography level="body-md" >{t('Buy_Credits_Text3')}</Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}>
        {products.map((product) => (
          <Card variant="outlined" sx={{ width: 400, maxWidth: '100%', marginTop: 4 }} key={product.id}>
            <Typography level="title-lg">{product.title}</Typography>
            <Typography level="body-sm">{product.description}</Typography>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">{t('Buy_Credits_Text4')}</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  {product.amount / 100} {product.currency.toLocaleUpperCase()} {t('Buy_Credits_Text5')}
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                onClick={onSelectProduct(product.id)}
              >
                 {t('Buy_Credits_Text6')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </PrivateLayout>
  );
};

export default View;
