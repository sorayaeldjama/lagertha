import { CreditsState } from "@/reducers/creditsReducer";

  export enum CreditsType  {
    CHANGE_CREDITSPAGE_FIELDS = 'CHANGE_CREDITSPAGE_FIELDS',
    GET_PRODUCTS = 'GET_PRODUCTS',
    SELECT_CREDITS_PACK = "SELECT_CREDITS_PACK"
  }
  
  export const changeCreditsPageFields = (payload: Partial<CreditsState> ) => ({
    type: CreditsType.CHANGE_CREDITSPAGE_FIELDS,
    payload,
  });
  
  export const getProducts = () => ({
    type: CreditsType.GET_PRODUCTS
  })

  export const selectCreditsPack = (productId: string) => ({
    type: CreditsType.SELECT_CREDITS_PACK,
    productId
  })