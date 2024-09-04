"use client";
import { useColorScheme } from "@mui/joy";
import View from "./View";
import { useEffect, useState } from "react";
import { ErrorObject, ParameterOutput } from "@/services/openapi";
import { Theme_Color } from "@/enums/themeColor.enum";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { SettingsState } from "@/reducers/settingsReducer";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  getParams: VoidFunction;
  getParamsLanguage: VoidFunction;
  children: React.ReactNode;
  title: string;
  lightMode: Theme_Color | null;
  selectedLightMode: boolean;
  settingsParams: ParameterOutput[] | ErrorObject;
  currentLanguage: string | null;
};

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  getParams,
  getParamsLanguage,
  children,
  title,
  lightMode,
  selectedLightMode,
  settingsParams,
  currentLanguage,

}) => {
  const { mode, setMode } = useColorScheme();
  // const modeColor = localStorage.getItem('modeColor');
  const { t } = useTranslation();
  const navigatorLocale = navigator.language
  const currentLanguageNow = localStorage.getItem('locale')
  const [language, setLanguage] = useState<string | null>("")

  
  // useEffect(() => {
  //   getParams()
  // }, [])

  useEffect(() => {
    changeSettingsPageFields({ currentLanguage:currentLanguageNow  })

  }, [currentLanguageNow])

  useEffect(() => {
    getParamsLanguage()
  }, [currentLanguage])

  useEffect(() => {
    setMode(lightMode)
  }, [lightMode, setMode])

  return <View {...{ title }}>{children}</View>;
};

export default ViewModel;
