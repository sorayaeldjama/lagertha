"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";
import { usePathname, useRouter } from "next/navigation";
import { Page } from "@/enums/pages.enum";
import { Jwt } from "@/types/jwt";
import { Role } from "@/enums/roles.enum";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { MainState } from "@/reducers/mainReducer";
import { useTranslation } from "@/hooks/useTranslation";
import { SettingsState } from "@/reducers/settingsReducer";
import { changeContactPageFields } from "@/actions/contact";

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  logout: VoidFunction;
  resertNewLink: VoidFunction;
  get_files: VoidFunction;
  userJwt: Jwt | null;
  isLogged: boolean;
  isLogOut: boolean;
  roles: Role[];
  getCredits: VoidFunction;
  getParamsLanguage: VoidFunction;
  currentLanguage: string | null;
  coins: number;
};
const ViewModel: React.FC<Props> = ({
  resertNewLink,
  changeMainPageFields,
  changeSettingsPageFields,
  get_files,
  userJwt,
  isLogOut,
  roles,
  getCredits,
  coins,
  getParamsLanguage,
  currentLanguage,
}) => {

  const router = useRouter();
  const userLogin = useMemo(() => userJwt?.login || "", [userJwt]);
  const userEmail = useMemo(() => userJwt?.email || "", [userJwt]);
  const currentLanguageNow = localStorage.getItem('locale')



  const [sidebarSideBar_title, setSidebarTitle] = useState<string>('');

  useEffect(() => {
    const title = process.env.NEXT_PUBLIC_APP_TITLE;


    setSidebarTitle(title as string);
  }, [setSidebarTitle]);

  useEffect(() => {
    changeSettingsPageFields({ currentLanguage: currentLanguageNow })
  }, [currentLanguageNow,changeSettingsPageFields,
    ])

  useEffect(() => {
    changeSettingsPageFields({ currentLanguage: currentLanguageNow })

  }, [currentLanguageNow])
  useEffect(() => {
    getParamsLanguage()
  }, [])

  useEffect(() => {
    getCredits();
  }, []);

  const currentPathname = usePathname();

  const activePage = useMemo(() => currentPathname as Page, [currentPathname]);

  const role = useMemo(() => {
    if (!userJwt) return "";
    if (userJwt.roles.includes(Role.ROLE_LINK)) return "LINK";
    if (userJwt.roles.includes(Role.ROLE_USER)) return "USER";
    return "";
  }, [userJwt]);

  const onClickCreateNewLink = useCallback(() => {
    router.push(Page.NEWLINK);
    resertNewLink();
  }, [router, resertNewLink]);

  const onClickFiles = useCallback(() => {
    router.push(Page.FILES);
    // get_files();
  }, [router]);

  const onClickLinks = useCallback(() => {
    router.push(Page.LINKS);
  }, [router]);

  const onPressLogout = useCallback(() => {
    changeMainPageFields({ isConfirmLogout: true });
  }, [changeMainPageFields]);

  const onClickSettings = useCallback(() => {
    router.push(Page.SETTINGS);
  }, [router]);

  const onClickContact = useCallback(() => {
    router.push(Page.CONTACT);
  }, [router]);

  const onClickCsLinks = useCallback(() => {
    router.push(Page.CUSTOMER_SUCCESS_LINKS);
  }, [router]);

  const onClickCsStats = useCallback(() => {
    router.push(Page.CUSTOMER_SUCCESS_STATS);
  }, [router]);

  const onClickAdminUsers = useCallback(() => {
    router.push(Page.ADMIN_USERS);
  }, [router]);

  const onClickAdminSystem = useCallback(() => {
    router.push(Page.ADMIN_SYSTEM);
  }, [router]);

  const onClickCredits = useCallback(() => {
    router.push(Page.BUY_CREDITS);
  }, [router]);

  const onClickProducts = useCallback(() => {
    router.push(Page.PRODUCTS);
  }, [router]);

  const isCustumerSuccess = useMemo(
    () => roles.includes(Role.ROLE_CUSTOMER_SUCCESS),
    [roles]
  );

  const onClickHome = useCallback(() => router.push(Page.TRANSFER), [router]);

  const isAdmin = useMemo(() => roles.includes(Role.ROLE_ADMIN), [roles]);

  const isFinance = useMemo(() => roles.includes(Role.ROLE_FINANCE), [roles]);

  return (
    <View
      {...{
        onClickFiles,
        onClickLinks,
        role,
        onPressLogout,
        userLogin,
        userEmail,
        onClickCreateNewLink,
        onClickSettings,
        onClickContact,
        isLogOut,
        onClickCsLinks,
        // onConfirmLogOut,
        // onCloseConfirmLogOut,
        activePage,
        isCustumerSuccess,
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
      }}
    />
  );
};
export default ViewModel;
