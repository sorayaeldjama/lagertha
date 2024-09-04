import { CsstatsState } from "@/reducers/csstatsReducer";

  export enum CsstatsType  {
    CHANGE_CSSTATSPAGE_FIELDS = 'CHANGE_CSSTATSPAGE_FIELDS',
    GET_DAILY_ANALYTICS = "GET_DAILY_ANALYTICS"
  }
  
  export const changeCsstatsPageFields = (payload: Partial<CsstatsState> ) => ({
    type: CsstatsType.CHANGE_CSSTATSPAGE_FIELDS,
    payload,
  });

  export const getDailyAnalytics = () => ({
    type: CsstatsType.GET_DAILY_ANALYTICS
  })
  