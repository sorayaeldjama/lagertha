import { AdminusersType } from '@/actions/adminusers';
import { UserOutput } from '@/services/openapi';
  export type AdminusersState = {
    users: UserOutput[];
    page: number;
    items_per_page: number;
    total_items: number;
    pages_to_display: string[];
    loading: boolean;
    userModal: UserOutput | null;
  }

  const initialState: AdminusersState= {
    users: [],
    page: 1,
    items_per_page: 15,
    total_items: 0,
    pages_to_display: [],
    loading: false,
    userModal: null
  };
  
  const adminusersReducer = (state: AdminusersState = initialState, action: any = {}) => {
    switch (action.type) {
      case AdminusersType.CHANGE_ADMINUSERSPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        } as AdminusersState
      default:
        return state;
    }
  };
  
  export default adminusersReducer;
  