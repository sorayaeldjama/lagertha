import { FinanceproductsState } from "@/reducers/financeproductsReducer";

export enum FinanceproductsType {
  CHANGE_FINANCEPRODUCTSPAGE_FIELDS = "CHANGE_FINANCEPRODUCTSPAGE_FIELDS",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  SUBMIT_NEW_PRODUCT = "SUBMIT_NEW_PRODUCT",
}

export const changeFinanceproductsPageFields = (
  payload: Partial<FinanceproductsState>
) => ({
  type: FinanceproductsType.CHANGE_FINANCEPRODUCTSPAGE_FIELDS,
  payload,
});

export const deleteProduct = (product_id: string) => ({
  type: FinanceproductsType.DELETE_PRODUCT,
  product_id,
});

export const submitNewProduct = () => ({
  type: FinanceproductsType.SUBMIT_NEW_PRODUCT,
});
