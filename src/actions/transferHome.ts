import { SnackType } from "@/enums/snackType.enum";
import { AuthenticationState } from "@/reducers/authentication";
import { MainState } from "@/reducers/mainReducer";
import { TransferHomeState } from "@/reducers/transferHome";
import { CredentialOutput } from "@/types/credentials";

export enum TransferHomeType {
    CHANGE_TRANSFER_HOME_FIELDS = "CHANGE_TRANSFER_HOME_FIELDS",
}

export const changeTransferHomePageFields = (payload: Partial<TransferHomeState>) => ({
  type: TransferHomeType.CHANGE_TRANSFER_HOME_FIELDS,
  payload,
});


