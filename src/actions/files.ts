import { FilesState } from "@/reducers/FilesReducer";
import { FileMetaOutput } from "@/services/openapi";

export enum FilesType {
    CHANGE_FILES_PAGE_FIELDS = 'CHANGE_FILES_PAGE_FIELDS',
    GET_FILES = "GET_FILES",
    DELETE_FILE = "DELETE_FILE",
    DOWNLOAD_FILE_LINK = "DOWNLOAD_FILE_LINK"
}

export const changeFilesPageFields = (payload: Partial<FilesState>) => ({
    type: FilesType.CHANGE_FILES_PAGE_FIELDS,
    payload,
});
export const get_files = () => ({
    type: FilesType.GET_FILES
})
export const delete_file = () => ({
    type: FilesType.DELETE_FILE
})
export const downloadFileLink = (file: FileMetaOutput) => ({
    type: FilesType.DOWNLOAD_FILE_LINK,
    file
})