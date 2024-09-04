import { Lagertha } from "lagertha_js";
import { ReduxStore } from "@/types/ReduxStore";
import {
  LinkOutput,
  LinkService,
  OpenAPI,
} from "@/services/openapi";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { changeNewLinkPageFields, sendNewLinkByEmail } from "@/actions/newLink";
import axios from "axios";
import { refreshToken } from "@/utils/refreshToken";
import { getCredits } from "@/actions/main";

export const caseSubmitCreateLink = async (store: ReduxStore) => {
  store.dispatch(
    changeNewLinkPageFields({
      loader: true,
      isFormNewLinkOpen: false,
    })
  );
  try {
    await refreshToken()
    const config = await generateLagerthaConfig(
      process.env.NEXT_PUBLIC_LAGERTHA_API || ""
    );
    const { selectedFiles,
      fileName,
      newLinkName,
      noPassword,
      password,
      filesIds
    } = store.getState().newLink;
    const token = localStorage.getItem("token_lagertha_transfer") || "";
    const filesIdsArray = []
    let keychain;
    for (const file of selectedFiles) {
      /// ------------------------------------------------------
      const key_chain = await Lagertha.create_key_chain([], config);
      const encryptFileName = await Lagertha.encrypt_with_key_chain(
        file.name,
        key_chain
      );
      const encryptFile = await Lagertha.encrypt_file_with_key_chain(
        file as File,
        key_chain
      );
      const token = localStorage.getItem("token_lagertha_transfer") || "";
      const buffer = Buffer.from(encryptFileName);
      const bufString = buffer.toString("hex");
      const res = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || ""
          }/file/${bufString}/${key_chain.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: encryptFile,
      });
      filesIdsArray.push(res.data.id);
      keychain = key_chain
    }
    store.dispatch(
      changeNewLinkPageFields({
        filesIds: [],
      })
    )
    if (!keychain) throw "no keychain"
    ///------------------------------------------------
    const encryptedName = await Lagertha.encrypt_with_key_chain(
      newLinkName,
      keychain
    );
    const linkInput = {
      name: encryptedName,
      user_group: null,
      files: filesIdsArray,
      password: null
    };

    OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
    OpenAPI.TOKEN = token;
    const url = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER_URL || "";

    const newLink = (await LinkService.linkControllerPostLink(
      linkInput
    )) as LinkOutput;
    store.dispatch(sendNewLinkByEmail())
    const link = url + "/link/" + newLink.uuid ;
    store.dispatch(getCredits())
    store.dispatch(
      changeNewLinkPageFields({
        createdLink: link,
        password: newLink.temp_p || "",
        confirmPassword: '',
        noPassword: false,
        isNewLinkCreated: true,
        selectedFiles: [],
        filesIds: [],
        link_id: newLink.id

      })
    );

  } catch (e) {
  }
  store.dispatch(
    changeNewLinkPageFields({
      loader: false,
    })
  );
};
