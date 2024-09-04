import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import { changeWelcomePageFields } from "@/actions/welcome";
import { get_fingerprint } from "@/utils/getFingerPrint";
import { AuthService, LinkOutput, LinkService, OpenAPI } from "@/services/openapi";
import axios from "axios";

export const caseCreateFreeLink = async (store: ReduxStore) => {
  try {
    store.dispatch(
      changeWelcomePageFields({
        encryptionLoading: true,
      })
    );
    const { selectedFile } = store.getState().welcome
    const fingerprint = await get_fingerprint();
    let creds;
    try {
      creds = await Lagertha.connect({
        login: fingerprint,
        password: "Ab123456" + fingerprint,
        application_uuid: process.env.NEXT_PUBLIC_LAGERTHA_UUID || "",
        env: process.env.NEXT_PUBLIC_LAGERTHA_API,
      });
    } catch {
      await Lagertha.post_user(
        fingerprint,
        "public@user.com",
        "",
        "",
        "Ab123456" + fingerprint,
        process.env.NEXT_PUBLIC_LAGERTHA_UUID || "",
        process.env.NEXT_PUBLIC_LAGERTHA_API || ""
      );
      creds = await Lagertha.connect({
        login: fingerprint,
        password: "Ab123456" + fingerprint,
        application_uuid: process.env.NEXT_PUBLIC_LAGERTHA_UUID || "",
        env: process.env.NEXT_PUBLIC_LAGERTHA_API,
      });

    }
    const lagertha_token = creds.access_token
    const lagerthaConfig = {
      access_token: lagertha_token,
      env: process.env.NEXT_PUBLIC_LAGERTHA_API || ""
    }
    const open_id = creds.open_id
    const key_chain = await Lagertha.create_key_chain([], lagerthaConfig)
    if (!selectedFile) throw "no fileselected"
    const encryptFile = await Lagertha.encrypt_file_with_key_chain(selectedFile, key_chain)
    const encryptFileName = await Lagertha.encrypt_with_key_chain(
      (selectedFile as File).name,
      key_chain
    );
    store.dispatch(
      changeWelcomePageFields({
        encryptionLoading: false,
        uploadLoading: true
      })
    );
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    const tranfer_creds = await AuthService.authControllerLogin({
      open_id,
      is_device: true,
      fingerprint
    })
    const buffer = Buffer.from(encryptFileName);
    const bufString = buffer.toString("hex");
    const res = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || ""
        }/file/${bufString}/${key_chain.id}`,
      headers: {
        Authorization: `Bearer ${tranfer_creds.access_token}`,
      },
      data: encryptFile,
    });
    const fileId = res.data.id;
    store.dispatch(
      changeWelcomePageFields({
        uploadLoading: false,
        linkLoading: true
      })
    );
    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = tranfer_creds.access_token;
    sessionStorage.setItem("tranfer_token", tranfer_creds.access_token);

    const url = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER_URL || "";
    const linkInput = {
      name: encryptFileName,
      user_group: null,
      files: [fileId]
    };
    const newLink = (await LinkService.linkControllerPostLink(
      linkInput
    )) as LinkOutput;

    store.dispatch(
      changeWelcomePageFields({
        linkUuid: newLink.uuid,
        isLinkEmailOpen: true,
        isLinkPasswordOpen: false,
        link_id: newLink.id

      })
    );
    const link = url + "/link/" + newLink.uuid /* + "?p=" + newLink.temp_p*/;
    const linkPassword = newLink.temp_p;

    store.dispatch(
      changeWelcomePageFields({
        linkLoading: false,
        createdLink: link,
        linkPassword: linkPassword
      })
    );

  } catch { }
};
