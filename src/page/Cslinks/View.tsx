"use client";
import { LinkCustomerSuccessOutput } from "@/services/openapi";
import styles from "./styles.module.scss";
import { DateTime } from "luxon";
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  Typography,
  Sheet,
  Table,
  Button,
} from "@mui/joy";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  links: LinkCustomerSuccessOutput[];
  current_page: number;
  pages_to_display: string[];
  total_items: number;
  items_per_page: number;
  change_page: (newPage: number) => void;
};

const View: React.FC<Props> = ({
  links,
  current_page,
  pages_to_display,
  total_items,
  items_per_page,
  change_page,
}) => {
  const { t } = useTranslation()

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
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
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography level="h2" component="h1">
            {t('Cs_Links_Title')}

          </Typography>
          <Sheet
            className="OrderTableContainer"
            variant="outlined"
            sx={{
              display: { xs: "none", sm: "flex" },
              // width: "100%",
              borderRadius: "sm",
              flexShrink: 1,
              overflow: "auto",
              minHeight: 0,
            }}
          >
            <Table
              aria-labelledby="tableTitle"
              stickyHeader
              hoverRow
              sx={{
                "--TableCell-headBackground":
                  "var(--joy-palette-background-level1)",
                "--Table-headerUnderlineThickness": "1px",
                "--TableRow-hoverBackground":
                  "var(--joy-palette-background-level1)",
                "--TableCell-paddingY": "4px",
                "--TableCell-paddingX": "8px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ width: 180, padding: "12px 6px" }}>
                    {t('Cs_Links_Created_On')}
                  </th>
                  <th style={{ width: 100, padding: "12px 6px" }}>
                    {t('Cs_Links_Emails_Sent')}
                  </th>
                  <th style={{ width: 120, padding: "12px 6px" }}>
                    {t('Cs_Links_Link_Opennings')}
                  </th>
                  <th style={{ width: 180, padding: "12px 6px" }}>
                    {t('Cs_Links_expired_On')}
                  </th>
                  <th style={{ width: 60, padding: "12px 6px" }}>{t('Cs_Links_Files')}</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.id}>
                    <td>
                      <Typography level="body-xs">
                        {DateTime.fromISO(link.created_at).toLocaleString(
                          DateTime.DATETIME_MED
                        )}
                      </Typography>
                    </td>
                    <td>
                      <Typography level="body-xs">{link.email_sent}</Typography>
                    </td>
                    <td>
                      <Typography level="body-xs">
                        {link.link_openning}
                      </Typography>
                    </td>
                    <td>
                      <Typography level="body-xs">
                        {link.expired_at
                          ? DateTime.fromISO(link.expired_at).toLocaleString(
                            DateTime.DATETIME_MED
                          )
                          : "-"}
                      </Typography>
                    </td>

                    <td>
                      <Typography level="body-xs">
                        {link.files?.length || 0}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </Box>

        <Box
          className="Pagination-laptopUp"
          sx={{
            pt: 2,
            gap: 1,
            [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          {current_page !== 1 ? (
            <Button
              size="sm"
              variant="outlined"
              color="neutral"
              startDecorator={<KeyboardArrowLeftIcon />}
              onClick={() => {
                change_page(current_page - 1);
              }}
            >
              {t('Cs_Links_Previous')}

            </Button>
          ) : (
            <div style={{ width: 106 }}></div>
          )}
          <Box sx={{ flex: 1 }} />
          {pages_to_display.map((page) => (
            <IconButton
              key={page}
              size="sm"
              variant={Number(page) === current_page ? "outlined" : "plain"}
              color="neutral"
              onClick={() => {
                if (!isNaN(Number(page))) {
                  change_page(Number(page));
                }
              }}
            >
              {page}
            </IconButton>
          ))}
          <Box sx={{ flex: 1 }} />
          {Math.ceil(total_items / items_per_page) > current_page ? (
            <Button
              size="sm"
              variant="outlined"
              color="neutral"
              endDecorator={<KeyboardArrowRightIcon />}
              onClick={() => {
                change_page(current_page + 1);
              }}
            >
              {t('Cs_Links_Next')}

            </Button>
          ) : (
            <div style={{ width: 106 }}></div>
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default View;
