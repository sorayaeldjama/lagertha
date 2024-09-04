import { changeFilesPageFields } from "@/actions/files";
import { FileMetaOutput, FileService, ListDto_for_FileMetaOutput, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { generateLagerthaConfig } from "@/utils/generateLagerthaConfig";
import { refreshToken } from "@/utils/refreshToken";
import { Lagertha } from "lagertha_js";

export const caseGetFiles = async (store: ReduxStore) => {
  const { loading } = store.getState().files;

  if (!loading) {
    store.dispatch(changeFilesPageFields({ loading: true }))

    try {
      await refreshToken()
      const token = localStorage.getItem("token_lagertha_transfer");
      if (!token) throw "no token";
      const config = await generateLagerthaConfig(
        process.env.NEXT_PUBLIC_LAGERTHA_API || ""
      );
      OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
      OpenAPI.TOKEN = token;
      const { page, items_per_page } = store.getState().files
      const raw_files = await FileService.fileControllerGetFileList(page, items_per_page) as ListDto_for_FileMetaOutput;

      const pages_to_display = []
      const max_page = (raw_files.total_items / items_per_page)

      const files: Promise<FileMetaOutput>[] = [];
      for (const file of raw_files.items as FileMetaOutput[]) {
        const file_promise = new Promise<FileMetaOutput>(async (resolve) => {
          let filename_encrypted = Buffer.from(file.name, "hex").toString();
          const filename = await Lagertha.decrypt(filename_encrypted, config);
          resolve({ ...file, name: filename });
        });
        files.push(file_promise);
      }
      const resolved = await Promise.all(files);

      pages_to_display.push("1")
      if (max_page > 1) {
        pages_to_display.push("2")
      }
      if (max_page > 2) {
        pages_to_display.push("3")
      }
      if (max_page > 6) {
        pages_to_display.push('...')
      }
      if (max_page > 3) {
        pages_to_display.push("4")
      }
      if (max_page > 4) {
        pages_to_display.push("5")
      }
      if (max_page > 5) {
        pages_to_display.push("6")
      }

      store.dispatch(changeFilesPageFields({
        files: resolved,
        total_items: raw_files.total_items,
        pages_to_display
      }))
    } catch {
      store.dispatch(changeFilesPageFields({ loading: false }));
    }
  };
  store.dispatch(changeFilesPageFields({ loading: false }));

}