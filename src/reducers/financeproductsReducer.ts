import { FinanceproductsType } from '@/actions/financeproducts';
  export type FinanceproductsState = {
    newTitle: string;
    newDescription: string;
    newAmount: number;
    newCredits: number;
  }

  const initialState: FinanceproductsState= {
    newTitle: "",
    newDescription: "",
    newAmount: 0,
    newCredits: 0
  };
  
  const financeproductsReducer = (state: FinanceproductsState = initialState, action: any = {}) => {
    switch (action.type) {
      case FinanceproductsType.CHANGE_FINANCEPRODUCTSPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        } as FinanceproductsState
      default:
        return state;
    }
  };
  
  export default financeproductsReducer;
  