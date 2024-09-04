import { CsstatsType } from '@/actions/csstats';
import { DailyAnalyticOutput } from '@/services/openapi';
  export type CsstatsState = {
    dailies: DailyAnalyticOutput[]
  }

  const initialState: CsstatsState= {
    dailies: []
  };
  
  const csstatsReducer = (state: CsstatsState = initialState, action: any = {}) => {
    switch (action.type) {
      case CsstatsType.CHANGE_CSSTATSPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        } as CsstatsState
      default:
        return state;
    }
  };
  
  export default csstatsReducer;
  