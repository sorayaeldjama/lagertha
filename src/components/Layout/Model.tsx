"use client";
import { usePathname, useRouter } from "next/navigation";
import View from "./View";
import { useCallback, useEffect, useMemo } from "react";
import { Page } from "@/enums/pages.enum";
import { Role } from "@/enums/roles.enum";
import { routeRole } from "@/enums/routeRoles";
import { Snack } from "@/types/snack";
import React from "react";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { SettingsState } from "@/reducers/settingsReducer";

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  closeSnack:VoidFunction;
  children: React.ReactNode;
  isLogged: boolean;
  securityLoader: boolean;
  roles: Role[];
  // closeSnack: VoidFunction;
  //  t: UseTranslation;
  snack:Snack | null;



};

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  closeSnack,
  children,
  isLogged,
  securityLoader,
  roles,
  snack
}) => {
  const path = usePathname();
  const router = useRouter();

  const currentLanguageNow = localStorage.getItem('locale')

 useEffect(() => {
    changeSettingsPageFields({ currentLanguage: currentLanguageNow })

  }, [currentLanguageNow])
  useEffect(() => {
     changeSettingsPageFields({ currentLanguage:currentLanguageNow  })

   }, [currentLanguageNow])

  // console.log("path",path)
  // const pages = new Pages('en')

  const isUnsecure = useMemo(
    () => !routeRole.find((route) => route.path === (path as Page)),
    [path]
  );
  const isAllow = useMemo(() => {
    if (isUnsecure) return true;

    return isLogged;
  }, [isUnsecure, isLogged]);

  useEffect(() => {
    if (!isAllow && !securityLoader && !isUnsecure) {
      router.push(Page.HOME);
    }
  }, [isAllow, securityLoader, router, isUnsecure]);

  const onCloseSnackBar = useCallback(() => {
    // changeContactPageFields({ isSendMessage: false })
  }, [])

  return (
    <View
      {...{
        isLogged,
        isUnsecure,
        isAllow,
        snack,
        onCloseSnackBar,
        closeSnack
      }}
    >
      {children}
    </View>
  );
};

export default ViewModel;
