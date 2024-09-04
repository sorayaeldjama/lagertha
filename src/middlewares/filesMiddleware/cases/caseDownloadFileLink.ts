import { changeLinkPageFields } from "@/actions/link";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { refreshToken } from "@/utils/refreshToken";
import axios from "axios";
import { Lagertha } from "lagertha_js";

export const caseDownloadFileLink = async (store: ReduxStore, action: any) => {

  try {
    await refreshToken()
    store.dispatch(changeLinkPageFields({ downloading: true }))

    const token = localStorage.getItem("token_lagertha_transfer");
   
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
    const config = await generateLagerthaConfig(process.env.NEXT_PUBLIC_LAGERTHA_API || "")
    const decrypted_file = await Lagertha.decrypt_file(file.data as File, config);

    const url = URL.createObjectURL(decrypted_file);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileMeta.name || "download";
    document.body.appendChild(a);
    a.click();
  } catch { }
  store.dispatch(changeLinkPageFields({ downloading: false }))
};
