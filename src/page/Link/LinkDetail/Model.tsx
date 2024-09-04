"use client";
import { FileMetaOutput, LinkOutput } from "@/services/openapi";
import View from "./View";
import { useCallback } from "react";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { WelcomeState } from "@/reducers/welcomeReducer";
import { Page } from "@/enums/pages.enum";
import { useRouter } from "next/navigation";

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  downloadFile: (file: FileMetaOutput) => void;
  downloadAllFiles: VoidFunction
  currentLink: LinkOutput;
  downloading: boolean;
};

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  downloadAllFiles,
  downloadFile,
  currentLink,
  downloading,
}) => {



  return <View {...{ currentLink, downloadFile, downloading, downloadAllFiles, }} />;
};

export default ViewModel;
