"use client";
import {
  CssVarsProvider,
  CssBaseline,
  Typography,
  Box,
} from "@mui/joy";

import Appbarsettings from "./AppBarSettings";
import Security from "./Security";
import PrivateLayout from "@/components/PrivateLayout";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onSubmitEditPassword: VoidFunction;
  editPasswordLoader: boolean;
  currentLanguage:string | null; 

};

const View: React.FC<Props> = ({
  onSubmitEditPassword,
  editPasswordLoader,
  currentLanguage
}) => {
  const {t} = useTranslation()

  return (
    <>
      <PrivateLayout title={t('Settings_Title')}  > 
     
          <Appbarsettings />
      
      </PrivateLayout>
    </>
  );
};
export default View;
