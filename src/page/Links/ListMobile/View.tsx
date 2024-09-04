'use client'
import { Box, List, ListItem, ListItemContent, ListItemDecorator, Avatar, Typography, Chip, ColorPaletteProp, ListDivider, IconButton, Sheet, Button, Link } from '@mui/joy';
import styles from './styles.module.scss';
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import { DateTime } from 'luxon';
import humanFileSize from '@/utils/humanFileSize';
import truncateString from '@/utils/trucateString';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteLink from '../DeleteLink';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  generate_url: (link: LinkOutput) => string;

  copyLink: (link: LinkOutput) => VoidFunction;
  onClickDeleteLink: (uuid: string) => void;
  calculate_link_size: (link: LinkOutput) => number;
  change_page: (newPage: number) => void;
  links: LinkOutput[];
  isConfirmDeleteLink: boolean;
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;

}

const View: React.FC<Props> = ({
  generate_url,
  copyLink,
  onClickDeleteLink,
  calculate_link_size,
  change_page,
  links,
  isConfirmDeleteLink,
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
        {links?.map((link) => (
          <List
            key={link.id}
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
                    {truncateString(link.name, 20)}
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
                    <Typography level="body-md">
                      <Typography>           {t('Links_Creation_Mobile')}
                      </Typography>
                      {DateTime.fromISO(link.created_at).toLocaleString(
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
                    <Typography level="body-md">
                      <Typography>               {t('Links_expiry_mobile')}
                      </Typography>
                      {

                        link.expired_at ? (
                          DateTime.fromISO((link.expired_at as string)).toLocaleString(
                            DateTime.DATETIME_MED
                          )
                        ) : (
                          <Typography level="body-md" >
                          {t('Links_expired_mobile')}
                          </Typography>
                        )
                      }
                    </Typography>
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
                    <div style={{ display: "flex", justifyContent: "space-between ", gap: "0.5rem", alignItems: "center" }}>
                      <div>

                        <FilePresentIcon fontSize='small' />
                      </div>
                      <Typography level="body-md" fontSize={"8"} sx={{ marginRight: "4" }}>
                        : {link.files?.length}
                      </Typography>
                      <Typography level="body-xs" sx={{ marginLeft: 1 }}>
                        {humanFileSize(calculate_link_size(link), true)}
                      </Typography>
                    </div>
                  </Box>


                  <Box
                    sx={{ display: "flex", gap: 6, alignItems: "center", marginLeft: -1 }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 2, alignItems: "center", marginLeft: 0 }}
                    >
                      <IconButton size="sm" onClick={copyLink(link)}>
                        <ContentCopyIcon />
                      </IconButton>
                      <Link href={generate_url(link)} target="_blank">
                        <Typography level="body-xs" color="primary">
                          {truncateString(generate_url(link), 40)}
                        </Typography>
                      </Link>
                    </Box >
                    <IconButton onClick={() => !link.uuid || onClickDeleteLink(link.uuid)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </div>

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
      <DeleteLink />

    </>

  );
};

export default View;