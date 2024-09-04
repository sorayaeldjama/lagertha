import { changeFilesPageFields, get_files } from "@/actions/files";
import { addSnack } from "@/actions/main";
import { SnackType } from "@/enums/snackType.enum";
import { FileService, OpenAPI } from "@/services/openapi";
import { ReduxStore } from "@/types/ReduxStore";
import { refreshToken } from "@/utils/refreshToken";


export const caseDeleteFile = async (store: ReduxStore) => {
    try {
        await refreshToken()
        const { fileId , deleteFileSnackSuccess} = store.getState().files
        const token = localStorage.getItem("token_lagertha_transfer");
        if (!token) throw "no token";
        if (!fileId) throw "no file"

        OpenAPI.BASE = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER || "";
        OpenAPI.TOKEN = token;

        await FileService.fileControllerDeleteFileMeta(fileId)
        store.dispatch(get_files())
        store.dispatch(changeFilesPageFields({
            isConfirmDeleteFile: false,
            isDeleted: true
        }))
        store.dispatch(
            addSnack(SnackType.SUCCESS, deleteFileSnackSuccess))
        
    } catch (error) {
        const {deleteFileSnackError } = store.getState().files

        store.dispatch(changeFilesPageFields({
            isConfirmDeleteFile: false,
            isDeleted: false
        }))
        store.dispatch(addSnack(SnackType.ERROR, deleteFileSnackError))

    }
};
