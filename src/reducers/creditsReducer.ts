import { CreditsType } from '@/actions/credits';
import { ProductOutput } from '@/services/openapi';
  export type CreditsState = {
    products: ProductOutput[]
  }

  const initialState: CreditsState= {
    products: []
  };
  
  const creditsReducer = (state: CreditsState = initialState, action: any = {}) => {
    switch (action.type) {
      case CreditsType.CHANGE_CREDITSPAGE_FIELDS:
        return {
          ...state,
          ...action.payload,
        } as CreditsState
      default:
        return state;
    }
  };
  
  export default creditsReducer;
  