import { RootState } from "@/store";
import { Middleware } from "redux";
import { FilesType } from "@/actions/files";
import { caseGetFiles } from "./cases/caseGetFiles";
import { caseDeleteFile } from "./cases/caseDeleteFile";
import { caseDownloadFileLink } from "./cases/caseDownloadFileLink";

const filesMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: any) => {
  switch (action.type) {
    case FilesType.GET_FILES:
      caseGetFiles(store)
      break
    case FilesType.DELETE_FILE:
      caseDeleteFile(store)
      break
    case FilesType.DOWNLOAD_FILE_LINK:
      caseDownloadFileLink(store,action);
      break
    default:
      next(action);
  }
};
export default filesMiddleware;
