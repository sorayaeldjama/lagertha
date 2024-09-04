import { changeLinkPageFields } from "@/actions/link";
import {
  AuthService,
  FileMetaOutput,
  LinkOutput,
  LinkService,
  OpenAPI,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { CredentialOutputTransfer } from "@/types/credentials";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { Lagertha } from "lagertha_js";

export const caseConnectUserLink = async (store: ReduxStore, action: any) => {
  try {
    store.dispatch(changeLinkPageFields({ loading: true }));
    const { uuid, p } = action;
    const creds = await Lagertha.connect({
      login: uuid,
      password: p,
      application_uuid: process.env.NEXT_PUBLIC_LAGERTHA_UUID || "",
      env: process.env.NEXT_PUBLIC_LAGERTHA_API,
    });
    const fingerprint = await get_fingerprint();
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    const credsLogin = (await AuthService.authControllerLogin({
      open_id: creds.open_id,
      fingerprint,
    })) as CredentialOutputTransfer;
    sessionStorage.setItem("lagertha_link_token", creds.access_token);
    sessionStorage.setItem(
      "lagertha_transfer_link_token",
      credsLogin.access_token
    );
    sessionStorage.setItem(
      "lagertha_link_pk",
      creds.pk
    );
    OpenAPI.TOKEN = credsLogin.access_token;
    const link = (await LinkService.linkControllerGetLink(uuid)) as LinkOutput;
    const files = [];
    for (const file of link.files as FileMetaOutput[]) {
      let filename_encrypted = Buffer.from(file.name, "hex").toString();
      const filename = await Lagertha.decrypt(filename_encrypted, {
        access_token: creds.access_token,
        env: process.env.NEXT_PUBLIC_LAGERTHA_API,
      });
      files.push({
        ...file,
        name: filename
      })
    }
    const newLink = {...link, files}
    store.dispatch(
      changeLinkPageFields({
        currentLink: newLink,
        loading: false,
      })
    );
  } catch {
    store.dispatch(
      changeLinkPageFields({
        password_need: true,
        loading: false,
      }))
  }
};
