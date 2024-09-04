import { changeLinkPageFields } from "@/actions/link";
import {
  OpenAPI,
} from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { CredentialOutputTransfer } from "@/types/credentials";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { hexToUint8Array } from "@/utils/hexToUint8Array";
import { uint8ArrayToHex } from "@/utils/uint8ArrayToHex";
import axios from "axios";
import { Lagertha } from "lagertha_js";


export const caseDownloadFile = async (store: ReduxStore, action: any) => {
  try {
    store.dispatch(changeLinkPageFields({ downloading: true }))
    const token = sessionStorage.getItem("lagertha_transfer_link_token");
    if (!token) throw "no transfer token";
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;

    const fileMeta = action.file;
    const file = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || ""}/file/${fileMeta.id
        }`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
    const pk = sessionStorage.getItem("lagertha_link_pk")
    const kyber = await import("pqc-kyber");
    const key = hexToUint8Array(pk || "");
    let res = kyber.encapsulate(key);
    const cipher = uint8ArrayToHex(res.ciphertext)
    const transit_key = uint8ArrayToHex(res.sharedSecret)

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
  } catch (e) { 
    console.error(e)
  }
  store.dispatch(changeLinkPageFields({ downloading: false }))
};
