'use client'
import { Box, List, ListItem, ListItemContent, ListItemDecorator, Avatar, Typography, Chip, ColorPaletteProp, ListDivider, IconButton, Sheet, Button, Link } from '@mui/joy';
import styles from './styles.module.scss';
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import { DateTime } from 'luxon';
import humanFileSize from '@/utils/humanFileSize';
import truncateString from '@/utils/trucateString';
import DeleteFile from '../DeleteFile';
import { useTranslation } from '@/hooks/useTranslation';


type Props = {

  onClickDeleteFile: (id: string) => void;
  change_page: (newPage: number) => void;
  downloadFileLink: (file: FileMetaOutput) => void;
  files: FileMetaOutput[],
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;

}

const View: React.FC<Props> = ({

  onClickDeleteFile,
  change_page,
  downloadFileLink,
  files,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,


}) => {

  const { t } = useTranslation()

  return (
    <>
      <Sheet sx={{
        display: { xs: 'block', sm: 'none' },
        width: '100%',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2
      }}>
        {files?.map((file) => (
          <List
            key={file.id}
            size="sm"
            sx={{
              '--ListItem-paddingX': 0,
              display: "flex",
              justifyContent: 'center',

            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                paddingBottom: 3
              }}
            >
              <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'end', justifyContent: 'space-between' }}>

                <div>
                  <Typography fontWeight={600} gutterBottom>
                    {truncateString(file.name, 20)}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 0.5,
                      mb: 1,
                    }}
                  >
                    <Typography level="body-md">{DateTime.fromISO(file.created_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 0.5,
                      mb: 1,
                    }}
                  >
                    <Typography level="body-xs">
                      {humanFileSize(file.size, true)}
                    </Typography>
                  </Box>
                </div>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Button
                    component="button"
                    size="sm"
                    onClick={() => {
                      downloadFileLink(file);
                    }}
                  >
                  {t('Files_List_Mobile')}

                  </Button>
                </Box>

              </ListItemContent>
            </ListItem>
            <ListDivider />
          </List>
        ))}

        {/* <Box
          className="Pagination-mobile"
          sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}
        >
                <IconButton
            aria-label="next page"
            variant="outlined"
            color="neutral"
            size="sm"
          >
           <KeyboardArrowLeftIcon />
          </IconButton>
     
          {Math.ceil(total_items / items_per_page) > current_page ? (

            <IconButton
              aria-label="previous page"
              variant="outlined"
              color="neutral"
              size="sm"
            >
              <KeyboardArrowLeftIcon />
            </IconButton>) : (
            <div style={{ width: 106 }}></div>
          )}
          <Typography level="body-sm" mx="auto">
            {current_page !== 1 ? (
              <Button
                size="sm"
                variant="outlined"
                color="neutral"
                startDecorator={<KeyboardArrowLeftIcon />}
                onClick={() => {
                  change_page(current_page - 1)
                }}
              >
                <KeyboardArrowLeftIcon />              </Button>
            ) :
              <div style={{ width: 106 }}></div>}
            <Box sx={{ flex: 1 }} />
            {pages_to_display.map((page) => (
              <IconButton
                key={page}
                size="sm"
                variant={Number(page) === current_page ? "outlined" : "plain"}
                color="neutral"
                onClick={() => {
                  if (!isNaN(Number(page))) {
                    change_page(Number(page))
                  }
                }}
              >
                {page}
              </IconButton>
            ))}          </Typography>
          <IconButton
            aria-label="next page"
            variant="outlined"
            color="neutral"
            size="sm"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box> */}
      </Sheet>
      <DeleteFile />

    </>

  );
};

export default View;