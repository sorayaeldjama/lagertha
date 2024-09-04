"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { SettingsState } from "@/reducers/settingsReducer";
import { useCallback, useEffect } from "react";
import { Theme_Color } from "@/enums/themeColor.enum";

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  getParamsLanguage: VoidFunction;
  editPasswordLoader: boolean;
  isEditPasswordOpen: boolean;
  lightMode: Theme_Color | null;
  currentLanguage:string | null; 
};

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  getParamsLanguage,
  isEditPasswordOpen,
  editPasswordLoader,
  lightMode,
  currentLanguage

}) => {
  const currentLanguageNow = localStorage.getItem('locale')

  // useEffect(() => {
  //   changeSettingsPageFields({ currentLanguage:currentLanguageNow  })

  // }, [currentLanguageNow])
  
  const onSubmitEditPassword = useCallback(() => {
    changeSettingsPageFields({ isEditPasswordOpen: true })
  }, [changeSettingsPageFields])

  return (
    <View
      {...{

        editPasswordLoader,
        onSubmitEditPassword,
        currentLanguage
      }}
    />
  );
};

export default ViewModel;
