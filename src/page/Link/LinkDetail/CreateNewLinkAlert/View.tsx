'use client'
import { Box, Button, Sheet, Typography } from '@mui/joy';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  onCreateLink: VoidFunction;
  isMobile: boolean;
}

const View: React.FC<Props> = ({
  onCreateLink,
  isMobile
}) => {

  const { t } = useTranslation()
  return (
    <Sheet
      variant="outlined" 
      color="neutral" sx={{
        p: 4,
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        // background: '#f7f9fa',
        alignItems: { md: "center" },
        paddingBottom: { xs: 4 },
        paddingLeft: { xs: 2 },
        paddingRight: { xs: 2 },
        paddingTop: { xs: 4 },

      }}
      >
      <Box
        sx={{ flex: 1 }}
        display={'flex'}>
        <AddLinkIcon color='primary' sx={{ marginRight: 1 }} ></AddLinkIcon>
        <Typography sx={{ alignItem: 'center', }}>
          {t('Link__Details_Create_New_Link_Alert')}
        </Typography>
      </Box>
      <Box sx={{
        marginLeft: 1,
        alignSelf: { xs: "center", md: "center" },
        marginTop: { xs: 2, md: "center" }
      }} >
        <Button size="md"
          onClick={onCreateLink}  >
         {t('Link__Details_Create_New_Link_Button')}

        </Button>
      </Box>
    </Sheet>
  );
};

export default View;