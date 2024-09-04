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
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { Lagertha } from "lagertha_js";

export const caseSubmitPassword = async (store: ReduxStore, action: any) => {
  try {
    store.dispatch(changeLinkPageFields({ passwordLoader: true }));
    const { uuid } = action;
    const { password } = store.getState().link;
    const creds = await Lagertha.connect({
      login: uuid,
      password,
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
    sessionStorage.setItem("lagertha_link_pk", creds.pk)
    OpenAPI.TOKEN = credsLogin.access_token;
    const link = (await LinkService.linkControllerGetLink(uuid)) as LinkOutput;
    const files = [];
    for (const file of link.files as FileMetaOutput[]) {
      let filename_encrypted = Buffer.from(file.name, "hex").toString();
      const filename = await Lagertha.decrypt(filename_encrypted, {
        env: process.env.NEXT_PUBLIC_LAGERTHA_API || "",
        access_token: creds.access_token,
      });
      files.push({
        ...file,
        name: filename,
      });
    }
    const newLink = { ...link, files };
    store.dispatch(
      changeLinkPageFields({
        currentLink: newLink,
        passwordLoader: false,
        password_need: false,
      })
    );
  } catch (e) {
    store.dispatch(
      changeLinkPageFields({
        errorPassword: true,
        passwordLoader: false,
      })
    );
  }
};
