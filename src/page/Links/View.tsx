"use client";
import { Box, Button, Sheet, Table, Link, IconButton } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import styles from "./styles.module.scss";
import { LinkOutput } from "@/services/openapi";
import { DateTime } from "luxon";
import humanFileSize from "@/utils/humanFileSize";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteLink from "./DeleteLink";
import ListMobile from "./ListMobile";
import LinkModal from "./LinkModal";
import { Visibility } from "@mui/icons-material";
import PrivateLayout from "@/components/PrivateLayout";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  change_page: (newPage: number) => void;
  generate_url: (link: LinkOutput) => string;
  truncateString: (str: string, limit: number) => string;
  calculate_link_size: (link: LinkOutput) => number;
  copyLink: (link: LinkOutput) => VoidFunction;
  onClickDeleteLink: (uuid: string) => void;
  links: LinkOutput[];
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;
  isConfirmDeleteLink: boolean;
  onClickLine: (currentLink: LinkOutput) => VoidFunction
};

const View: React.FC<Props> = ({
  change_page,
  generate_url,
  truncateString,
  calculate_link_size,
  copyLink,
  onClickDeleteLink,
  links,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
  isConfirmDeleteLink,
  onClickLine
}) => {
  const { t } = useTranslation()

  return (
    <PrivateLayout title="Links_Title" >
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
                {t('Links_Creation')}
              </th>
              <th style={{ width: 180, padding: "12px 6px" }}>{t('Links_Name')}</th>
              <th style={{ width: 80, padding: "12px 6px" }}>{t('Links_Size')}</th>
              <th style={{ width: 60, padding: "12px 6px" }}>{t('Links_Files')}</th>
              <th style={{ width: 300, padding: "12px 6px" }}>{t('Links_Url')}</th>
              <th style={{ width: 180, padding: "12px 6px" }}>
                {t('Links_expiry')}
              </th>
              <th style={{ width: 80, padding: "12px 6px" }}></th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link.id} style={{ cursor: "pointer" }} onClick={onClickLine(link)}>
                <td>
                  <Typography level="body-xs">
                    {DateTime.fromISO(link.created_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-xs">
                    {truncateString(link.name, 20)}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-xs">
                    {humanFileSize(calculate_link_size(link), true)}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-xs">
                    {link.files?.length}
                  </Typography>
                </td>
                <td>
                  <Box
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <IconButton size="sm" onClick={(e: React.BaseSyntheticEvent) => {
                      e.stopPropagation()
                      copyLink(link)
                    }}>
                      <ContentCopyIcon />
                    </IconButton>
                    <Link href={generate_url(link)} target="_blank">
                      <Typography level="body-xs" color="primary">
                        {truncateString(generate_url(link), 40)}
                      </Typography>
                    </Link>
                  </Box>
                </td>
                <td>
                  <Typography level="body-xs">
                    {link.expired_at
                      ? DateTime.fromISO(
                        link.expired_at as string
                      ).toLocaleString(DateTime.DATETIME_MED)
                      : "-"}
                  </Typography>
                </td>
                <td>
                  <IconButton
                    onClick={(e: React.BaseSyntheticEvent) => {
                      e.stopPropagation()
                      !link.uuid || onClickDeleteLink(link.uuid)
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <ListMobile />
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
            {t('Links_Previous')}

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
              {t('Links_Next')}

          </Button>
        ) : (
          <div style={{ width: 106 }}></div>
        )}
      </Box>
      <LinkModal />
      <DeleteLink />
    </PrivateLayout>
  );
};
export default View;
