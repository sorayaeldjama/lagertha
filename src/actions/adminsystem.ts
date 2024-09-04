import { AdminsystemState } from "@/reducers/adminsystemReducer";

  export enum AdminsystemType  {
    CHANGE_ADMINSYSTEMPAGE_FIELDS = 'CHANGE_ADMINSYSTEMPAGE_FIELDS',
    GET_ADMIN_SYSTEM_INFO = 'GET_ADMIN_SYSTEM_INFO',
    RESET_ADMIN_SYSTEM_INFO = "RESET_ADMIN_SYSTEM_INFO"
  }
  
  export const changeAdminsystemPageFields = (payload: Partial<AdminsystemState> ) => ({
    type: AdminsystemType.CHANGE_ADMINSYSTEMPAGE_FIELDS,
    payload,
  });
  
  export const getAdminSystemInfo = () => ({
    type: AdminsystemType.GET_ADMIN_SYSTEM_INFO
  })

  export const resetAdminSystemInfo = () => ({
    type: AdminsystemType.RESET_ADMIN_SYSTEM_INFO
  })