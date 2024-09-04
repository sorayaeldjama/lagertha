import { LinkState } from "@/reducers/linkReducer";
import { FileMetaOutput } from "@/services/openapi";

  export enum LinkType  {
    CHANGE_LINKPAGE_FIELDS = 'CHANGE_LINKPAGE_FIELDS',
    CONNECT_USER_LINK = 'CONNECT_USER_LINK',
    DOWNLOAD_FILE = 'DOWNLOAD_FILE',
    DOWNLOAD_ALL_FILES = 'DOWNLOAD_ALL_FILES',
    SUBMIT_PASSWORD = "SUBMIT_PASSWORD"
  }
  
  export const changeLinkPageFields = (payload: Partial<LinkState> ) => ({
    type: LinkType.CHANGE_LINKPAGE_FIELDS,
    payload,
  });
  export const connectUserLink = (uuid: string, p: string) => ({
    type: LinkType.CONNECT_USER_LINK,
    uuid,
    p
  })
  export const downloadFile = (file: FileMetaOutput) => ({
    type: LinkType.DOWNLOAD_FILE,
    file
  })

  export const downloadAllFiles = () => ({
    type: LinkType.DOWNLOAD_ALL_FILES
  })

  export const submitPassword = (uuid: string) => ({
    type: LinkType.SUBMIT_PASSWORD,
    uuid
  })