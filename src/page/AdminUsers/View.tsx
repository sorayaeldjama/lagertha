"use client";
import { UserOutput } from "@/services/openapi";
import styles from "./styles.module.scss";
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  Typography,
  Sheet,
  Table,
  Button,
  Chip,
  ModalDialog,
  Modal,
  DialogTitle,
  DialogActions,
  Checkbox,
  Alert,
} from "@mui/joy";
import { DateTime } from "luxon";

import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Edit, Warning } from "@mui/icons-material";
import { DialogContent, DialogContentText } from "@mui/material";
import { Role } from "@/enums/roles.enum";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  users: UserOutput[];
  current_page: number;
  pages_to_display: string[];
  total_items: number;
  items_per_page: number;
  change_page: (newPage: number) => void;
  roleModal: Role[];
  userModal: UserOutput | null;
  onClickEdit: (user: UserOutput) => VoidFunction;
  onCloseModal: VoidFunction;
  onChangeRole: (role: Role) => (e: React.BaseSyntheticEvent) => void;
  onValidateRoles: VoidFunction;
  rolesError: boolean;
};

const View: React.FC<Props> = ({
  users,
  current_page,
  pages_to_display,
  total_items,
  items_per_page,
  change_page,
  roleModal,
  userModal,
  onClickEdit,
  onCloseModal,
  onChangeRole,
  onValidateRoles,
  rolesError,
}) => {
  const { t } = useTranslation();

  return (
    <>
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
              {t('Admin_Users_Title')}
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
                    <th style={{ width: 100, padding: "12px 6px" }}>
                      {t('Admin_Users_Created_On')}
                    </th>
                    <th style={{ width: 100, padding: "12px 6px" }}>{t('Admin_Users_Email')}</th>
                    <th style={{ width: 100, padding: "12px 6px" }}>{t('Admin_Users_Login')}</th>
                    <th style={{ width: 100, padding: "12px 6px" }}>{t('Admin_Users_Name')}</th>
                    <th style={{ width: 100, padding: "12px 6px" }}>{t('Admin_Users_Coins')}</th>
                    <th style={{ width: 180, padding: "12px 6px" }}>{t('Admin_Users_Roles')}</th>
                    <th style={{ width: 180, padding: "12px 6px" }}>{t('Admin_Users_Last_Connexion')}</th>
                    <th style={{ width: 60, padding: "12px 6px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Typography level="body-xs">
                          {DateTime.fromISO(user.created_at).toLocaleString(
                            DateTime.DATETIME_MED
                          )}
                        </Typography>
                      </td>
                      <td>
                        <Typography level="body-xs">{user.email}</Typography>
                      </td>
                      <td>
                        <Typography level="body-xs">{user.login}</Typography>
                      </td>
                      <td>
                        <Typography level="body-xs">
                          {user.firstName} {user.lastName}
                        </Typography>
                      </td>
                      <td>
                        <Typography level="body-xs">{user.coins}</Typography>
                      </td>
                      <td style={{}}>
                        {user.roles.map((role) => (
                          <Chip sx={{ margin: 0.5 }} key={role}>
                            {role.replace("ROLE_", "").toLocaleLowerCase()}
                          </Chip>
                        ))}
                      </td>
                      <td>
                        <Typography level="body-xs">
                          {user.last_connexion_date ? DateTime.fromISO(user.last_connexion_date).toLocaleString(
                            DateTime.DATETIME_MED
                          ) : "-"}
                        </Typography>
                      </td>
                      <td>
                        <Box>
                          <IconButton onClick={onClickEdit(user)}>
                            <Edit color="inherit" />
                          </IconButton>
                        </Box>
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
                {t('Admin_Users_Previous')}
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
                {t('Admin_Users_Next')}
              </Button>
            ) : (
              <div style={{ width: 106 }}></div>
            )}
          </Box>
        </Box>
      </CssVarsProvider>
      <Modal open={!!userModal} onClose={onCloseModal}>
        <ModalDialog sx={{ width: "100%" }} maxWidth="sm">
          <DialogTitle>{t('Admin_Users_Modal_Title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            {t('Admin_Users_Modal_Text1')}
            </DialogContentText>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 2 }}
            >
              <Checkbox
                label={t('Admin_Users_Modal_Label_User')}
                onChange={onChangeRole(Role.ROLE_USER)}
                checked={roleModal.includes(Role.ROLE_USER)}
              />
              <Checkbox
                label={t('Admin_Users_Modal_Customer_Success')}
                onChange={onChangeRole(Role.ROLE_CUSTOMER_SUCCESS)}
                checked={roleModal.includes(Role.ROLE_CUSTOMER_SUCCESS)}
              />
              <Checkbox
                label={t('Admin_Users_Modal_Label_Finance')}
                onChange={onChangeRole(Role.ROLE_FINANCE)}
                checked={roleModal.includes(Role.ROLE_FINANCE)}
              />
              <Checkbox
                label={t('Admin_Users_Modal_Label_Admin')}
                onChange={onChangeRole(Role.ROLE_ADMIN)}
                checked={roleModal.includes(Role.ROLE_ADMIN)}
              />
            </Box>
            {rolesError && (
              <Alert
                sx={{ alignItems: "flex-start", marginTop: 4 }}
                variant="soft"
                color="danger"
                startDecorator={<Warning />}
              >
                <Typography level="body-sm">
                {t('Admin_Users_Modal_Alert_Text1')}
                </Typography>
              </Alert>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={onValidateRoles}>{t('Admin_Users_Modal_Button_Save')}</Button>
            <Button variant="plain" onClick={onCloseModal}>
              {t('Admin_Users_Modal_Button_Cancel')}
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default View;
