import { SignupType } from "@/actions/signup";
import { TransferHomeType } from "@/actions/transferHome";
export type TransferHomeState = {
    isTransferHomeOpen: boolean;
};

const initialState: TransferHomeState = {
    isTransferHomeOpen:false
};

const transferHomeReducer = (state: TransferHomeState = initialState, action: any = {}) => {
    switch (action.type) {
        case TransferHomeType.CHANGE_TRANSFER_HOME_FIELDS:
            return {
                ...state,
                ...action.payload,
            } as TransferHomeState;
        default:
            return state as TransferHomeState;
    }
};

export default transferHomeReducer;
