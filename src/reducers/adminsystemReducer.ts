import { AdminsystemType } from '@/actions/adminsystem';
import { SystemInformationOutput } from '@/services/openapi';
  export type AdminsystemState = {
    infos: SystemInformationOutput[]
  }

  const initialState: AdminsystemState= {
    infos: []
  };
  
  const adminsystemReducer = (state: AdminsystemState = initialState, action: any = {}) => {
    switch (action.type) {
      case AdminsystemType.CHANGE_ADMINSYSTEMPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        } as AdminsystemState
      case AdminsystemType.RESET_ADMIN_SYSTEM_INFO:
        return initialState
      default:
        return state;
    }
  };
  
  export default adminsystemReducer;
  