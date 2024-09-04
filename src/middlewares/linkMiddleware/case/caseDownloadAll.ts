import { changeLinkPageFields } from "@/actions/link";
import {
  AuthService,
  FileMetaOutput,
  FileService,
  LinkOutput,
  LinkService,
  OpenAPI,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { CredentialOutputTransfer } from "@/types/credentials";
import { get_fingerprint } from "@/utils/getFingerPrint";
import axios from "axios";
import { Lagertha } from "lagertha_js";

export const caseDownloadAll = async (store: ReduxStore, action: any) => {
  try {
    store.dispatch(changeLinkPageFields({ downloading: true }));
    const { currentLink } = store.getState().link;
    const token = sessionStorage.getItem("lagertha_transfer_link_token");
    if (!currentLink) throw "no link";
    if (!token) throw "no transfer token";
    for (const fileMeta of currentLink.files as FileMetaOutput[]) {
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
      OpenAPI.TOKEN = token;

      const file = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || ""}/file/${
          fileMeta.id
        }`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });
      const lagertha_token = sessionStorage.getItem("lagertha_link_token");
      const decrypted_file = await Lagertha.decrypt_file(file.data as File, {
        access_token: lagertha_token,
        env: process.env.NEXT_PUBLIC_LAGERTHA_API,
      });

      const url = URL.createObjectURL(decrypted_file);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileMeta.name || "download";
      document.body.appendChild(a);
      a.click();
    }
  } catch (e) {
  }

  store.dispatch(changeLinkPageFields({ downloading: false }));
};
