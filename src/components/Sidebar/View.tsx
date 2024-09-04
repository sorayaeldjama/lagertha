"use client";
import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import {  CssBaseline,  } from "@mui/joy";
import {extendTheme,CssVarsProvider } from '@mui/joy/styles'
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PeopleIcon from "@mui/icons-material/People";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Link } from "@mui/joy";
import styles from "./styles.module.scss";
import { styled } from "@mui/joy";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LinkIcon from "@mui/icons-material/Link";
import { Jwt } from "@/types/jwt";
import BarChartIcon from "@mui/icons-material/BarChart";
import { closeSidebar } from "@/utils/toggleSideBar";
import ConfirmLogOut from "./ConfirmLogOut";
import { Page } from "@/enums/pages.enum";
import { ListItemText } from "@mui/material";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import TollIcon from "@mui/icons-material/Toll";
import PaidIcon from "@mui/icons-material/Paid";
import { useTranslation } from "@/hooks/useTranslation";
// import favicon from '@/public/image/favicon.ico'
import Image from 'next/image'

// import theme from "@/theme";




TollIcon;
type Props = {
  onPressLogout: VoidFunction;
  onClickCreateNewLink: VoidFunction;
  onClickFiles: VoidFunction;
  onClickLinks: VoidFunction;
  activePage: Page;
  userLogin: string;
  userEmail: string;
  role: string;
  onClickContact: VoidFunction;
  onClickSettings: VoidFunction;
  isLogOut: boolean;
  isCustumerSuccess: boolean;
  onClickCsLinks: VoidFunction;
  // onConfirmLogOut: VoidFunction;
  // onCloseConfirmLogOut: VoidFunction;
  isAdmin: boolean;
  onClickAdminUsers: VoidFunction;
  onClickCsStats: VoidFunction;
  onClickAdminSystem: VoidFunction;
  coins: number;
  onClickCredits: VoidFunction;
  isFinance: boolean;
  onClickProducts: VoidFunction;
  onClickHome: VoidFunction;
  currentLanguage: string | null;
  sidebarSideBar_title:string

};

const View: React.FC<Props> = ({
  onPressLogout,
  onClickCreateNewLink,
  onClickFiles,
  onClickLinks,
  activePage,
  userLogin,
  userEmail,
  role,
  onClickContact,
  onClickSettings,
  isLogOut,
  isCustumerSuccess,
  onClickCsLinks,
  isAdmin,
  onClickAdminUsers,
  onClickCsStats,
  onClickAdminSystem,
  coins,
  onClickCredits,
  isFinance,
  onClickProducts,
  onClickHome,
  currentLanguage,
  sidebarSideBar_title

  // onConfirmLogOut,
  // onCloseConfirmLogOut
}) => {
 
 

  const theme = extendTheme({
    
    colorSchemes: {
      light: {
        palette: {
          primary: {
            solidBg: 'var(--joy-palette-primary-60)',      
            solidColor: '#fff',                           
            solidHoverBg: 'var(--joy-palette-primary-70)',  // the :hover background
            solidActiveBg: 'var(--joy-palette-primary-1000)', // the :active background
            // ...other tokens
          },
          neutral: {
            solidBg: 'var(--joy-palette-primary-700)',
            solidColor: '#fff0',
            solidHoverBg: 'var(--joy-palette-primary-800)',
            solidActiveBg: 'var(--joy-palette-primary-900)',
            // ...other tokens
          },
          // ...other palettes
        }
      },
      dark: {
        palette: {
          // similar structure but different values
        }
      },
    }
  })

  const { t } = useTranslation()

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  


  return (
    
    <CssVarsProvider disableTransitionOnChange 
    theme={theme}
    >
      <CssBaseline />
      <Sheet
        className="Sidebar"
        sx={{
          position: { xs: "fixed", md: "sticky" },
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
            md: "none",
          },
          transition: "transform 0.4s, width 0.4s",
          zIndex: 2,
          height: "100dvh",
          width: "var(--Sidebar-width)",
          top: 0,
          p: 2,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRight: "1px solid",
          borderColor: "divider",
        }}
      >
        <GlobalStyles
          styles={(theme) => ({
            // ":root": {
            //   "--Sidebar-width": "220px",
            //   [theme.breakpoints.up("lg")]: {
            //     "--Sidebar-width": "240px",
            //   },
            // },
          })}
        />
        <Box
          className="Sidebar-overlay"
          sx={{
            position: "fixed",
            zIndex: 9998,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            opacity: "var(--SideNavigation-slideIn)",
            backgroundColor: "var(--joy-palette-background-backdrop)",
            transition: "opacity 0.4s",
            transform: {
              xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
              lg: "translateX(-100%)",
            },
          }}
          onClick={closeSidebar}
        />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {/* <IconButton
            variant="soft"
            color="primary"
            size="sm"
            onClick={onClickHome}
          >
            <BrightnessAutoRoundedIcon />
          </IconButton> */}
          <Image
            src="/image/favicon.ico"
            width={30}
            height={30}
            alt="Picture of the author"
            onClick={onClickHome}
          />
          <Typography level="title-lg">
            {t(sidebarSideBar_title)}
          </Typography>
          {/* <link rel="icon" href="../../../public/image/favicon.ico" sizes="any" >cc</link> */}

        </Box>
        <Box>
          <Link onClick={onClickCredits}>
            <TollIcon />
            <Typography
              level="body-sm"
              color="primary"
              sx={{ fontWeight: "bold" }}
              
            >
              {t('Public_layout_credit')} {coins}
            </Typography>
          </Link>
        </Box>
        <Button
         className={styles.slectFolder} 
        onClick={onClickCreateNewLink}
        >
          <AddCircleIcon sx={{ marginRight: "8px", }} />
          {t('SideBar_Create_New_Link_Button')}
        </Button>
        <Box
          sx={{
            minHeight: 0,
            overflow: "hidden auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            [`& .${listItemButtonClasses.root}`]: {
              gap: 1.5,
            },
          }}
        >
          <List
            size="sm"
            sx={{
              gap: 1,
              "--List-nestedInsetStart": "30px",
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
            }}
          >
            <ListItem
              className={
                activePage === Page.LINKS
                  ? styles.isActivePage
                  : styles.isNotActivePage
              }
            >
              <ListItemButton onClick={onClickLinks}>
                <LinkIcon
                  color={activePage === Page.LINKS ? "primary" : "inherit"}
                  fontSize="medium"
                />
                <ListItemContent>
                  <Typography
                    level="title-sm"
                    color={activePage === Page.LINKS ? "primary" : "neutral"}
                  >
                    {t('SideBar_My_Links')}
                  </Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem nested>
              <ListItem
                className={
                  activePage === Page.FILES
                    ? styles.isActivePage
                    : styles.isNotActivePage
                }
              >
                <ListItemButton onClick={onClickFiles}>
                  <InsertDriveFileIcon
                    color={activePage === Page.FILES ? "primary" : "inherit"}
                  />
                  <ListItemContent>
                    <Typography
                      color={activePage === Page.FILES ? "primary" : "neutral"}
                      level="title-sm"
                    >
                      {t('SideBar_My_Files')}

                    </Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            </ListItem>
            {isCustumerSuccess && (
              <>
                <Divider />
                <ListItem nested>
                  <ListItemText>
                    <Typography level="title-sm" color="neutral">
                      {t('SideBar_Customer_success')}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={
                    activePage === Page.CUSTOMER_SUCCESS_STATS
                      ? styles.isActivePage
                      : styles.isNotActivePage
                  }
                >
                  <ListItemButton onClick={onClickCsStats}>
                    <BarChartIcon
                      color={
                        activePage === Page.CUSTOMER_SUCCESS_STATS
                          ? "primary"
                          : "inherit"
                      }
                      fontSize="medium"
                    />
                    <ListItemContent>
                      <Typography
                        level="title-sm"
                        color={
                          activePage === Page.CUSTOMER_SUCCESS_STATS
                            ? "primary"
                            : "neutral"
                        }
                      >
                        {t('SideBar_Global_stats')}

                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className={
                    activePage === Page.CUSTOMER_SUCCESS_LINKS
                      ? styles.isActivePage
                      : styles.isNotActivePage
                  }
                >
                  <ListItemButton onClick={onClickCsLinks}>
                    <LinkIcon
                      color={
                        activePage === Page.CUSTOMER_SUCCESS_LINKS
                          ? "primary"
                          : "inherit"
                      }
                      fontSize="medium"
                    />
                    <ListItemContent>
                      <Typography
                        level="title-sm"
                        color={
                          activePage === Page.CUSTOMER_SUCCESS_LINKS
                            ? "primary"
                            : "neutral"
                        }
                      >
                        {t('SideBar_Link_list')}

                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {isFinance && (
              <>
                <Divider />
                <ListItem nested>
                  <ListItemText>
                    <Typography level="title-sm" color="neutral">
                      {t('SideBar_Finance')}

                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={
                    activePage === Page.PRODUCTS
                      ? styles.isActivePage
                      : styles.isNotActivePage
                  }
                >
                  <ListItemButton onClick={onClickProducts}>
                    <PaidIcon
                      color={
                        activePage === Page.PRODUCTS ? "primary" : "inherit"
                      }
                      fontSize="medium"
                    />
                    <ListItemContent>
                      <Typography
                        level="title-sm"
                        color={
                          activePage === Page.PRODUCTS ? "primary" : "neutral"
                        }
                      >
                        {t('SideBar_ Products')}

                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {isAdmin && (
              <>
                <Divider />
                <ListItem nested>
                  <ListItemText>
                    <Typography level="title-sm" color="neutral">
                      {t('SideBar_Admin')}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={
                    activePage === Page.ADMIN_USERS
                      ? styles.isActivePage
                      : styles.isNotActivePage
                  }
                >
                  <ListItemButton onClick={onClickAdminUsers}>
                    <PeopleIcon
                      color={
                        activePage === Page.ADMIN_USERS ? "primary" : "inherit"
                      }
                      fontSize="medium"
                    />
                    <ListItemContent>
                      <Typography
                        level="title-sm"
                        color={
                          activePage === Page.ADMIN_USERS
                            ? "primary"
                            : "neutral"
                        }
                      >
                        {t('SideBar_Users_list')}

                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className={
                    activePage === Page.ADMIN_SYSTEM
                      ? styles.isActivePage
                      : styles.isNotActivePage
                  }
                >
                  <ListItemButton onClick={onClickAdminSystem}>
                    <DevicesOtherIcon
                      color={
                        activePage === Page.ADMIN_SYSTEM ? "primary" : "inherit"
                      }
                      fontSize="medium"
                    />
                    <ListItemContent>
                      <Typography
                        level="title-sm"
                        color={
                          activePage === Page.ADMIN_SYSTEM
                            ? "primary"
                            : "neutral"
                        }
                      >
                        {t('SideBar_System_informations')}

                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
          <Divider />

          <List
            size="sm"
            sx={{
              mt: "auto",
              flexGrow: 0,
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
              "--List-gap": "8px",
              mb: 2,
            }}
          >
            <ListItem
              className={
                activePage === Page.CONTACT
                  ? styles.isActivePage
                  : styles.isNotActivePage
              }
            >
              <ListItemButton onClick={onClickContact}>
                <SupportRoundedIcon
                  color={activePage === Page.CONTACT ? "primary" : "inherit"}
                />
                <Typography
                  level="body-sm"
                  color={activePage === Page.CONTACT ? "primary" : "neutral"}
                >
                  {" "}
                  {t('SideBar_Contact')}

                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              className={
                activePage === Page.SETTINGS
                  ? styles.isActivePage
                  : styles.isNotActivePage
              }
            >
              <ListItemButton onClick={onClickSettings}>
                <SettingsRoundedIcon
                  color={activePage === Page.SETTINGS ? "primary" : "inherit"}
                />
                <Typography
                  level="body-sm"
                  color={activePage === Page.SETTINGS ? "primary" : "neutral"}
                >
                  {t('SideBar_Settings')}

                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Card
            invertedColors
            variant="soft"
            color="warning"
            size="sm"
            sx={{ boxShadow: "none" }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography level="title-sm">Used space</Typography>
              <IconButton size="sm">
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
            <Typography level="body-xs">
              Your team has used 80% of your available space. Need more?
            </Typography>
            <LinearProgress
              variant="outlined"
              value={80}
              determinate
              sx={{ my: 1 }}
            />
            <Button size="sm" variant="solid">
              Upgrade plan
            </Button>
          </Card> */}
        </Box>
        <Divider />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar variant="outlined" size="sm">
            {userLogin[0]}
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">{userLogin}</Typography>
            <Typography level="body-xs">{userEmail}</Typography>
          </Box>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={onPressLogout}
          >
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      </Sheet>
      <ConfirmLogOut />
    </CssVarsProvider>
  );
};
export default View;
