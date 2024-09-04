"use client";
import {
  FileMetaOutput,
  LinkOpenningOutput,
  LinkOutput,
  LinkSendOutput,
} from "@/services/openapi";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { LinkState } from "@/reducers/linkReducer";
import { useCallback, useEffect, useState } from "react";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { Lagertha } from "lagertha_js";

type Props = {
  currentLink: null | LinkOutput;
  changeLinksPageFields: ReduxUniversalSetter<LinkState>;
  getLinkOpenning: VoidFunction;
  opennings: LinkOpenningOutput[];
  getLinkSent: VoidFunction;
  links_sent: LinkSendOutput[];
};

const ViewModel: React.FC<Props> = ({
  currentLink,
  changeLinksPageFields,
  getLinkOpenning,
  opennings,
  getLinkSent,
  links_sent,
}) => {
  const [files, setFiles] = useState<FileMetaOutput[]>([]);

  
  const getFiles = useCallback(async () => {
    if (currentLink) {
      const config = await generateLagerthaConfig(
        process.env.NEXT_PUBLIC_LAGERTHA_API || ""
      );
      const files: Promise<FileMetaOutput>[] = [];
      for (const file of currentLink.files as FileMetaOutput[]) {
        const file_promise = new Promise<FileMetaOutput>(async (resolve) => {
          let filename_encrypted = Buffer.from(file.name, "hex").toString();
          const filename = await Lagertha.decrypt(filename_encrypted, config);
          resolve({ ...file, name: filename });
        });
        files.push(file_promise);
      }
      const resolved = await Promise.all(files);
      setFiles(resolved);
    }
  }, [currentLink]);
  useEffect(() => {
    if (currentLink) {
      getLinkOpenning();
      getLinkSent();
      getFiles();
    }
  }, [currentLink, getFiles, getLinkOpenning, getLinkSent]);

  const onClose = useCallback(() => {
    changeLinksPageFields({
      currentLink: null,
    });
  }, [changeLinksPageFields]);
  return <View {...{ currentLink, onClose, opennings, files, links_sent }} />;
};

export default ViewModel;
