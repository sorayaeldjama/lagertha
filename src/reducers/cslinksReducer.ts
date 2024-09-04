import { CslinksType } from "@/actions/cslinks";
import { LinkCustomerSuccessOutput } from "@/services/openapi";
export type CslinksState = {
  links: LinkCustomerSuccessOutput[];
  page: number;
  items_per_page: number;
  total_items: number;
  pages_to_display: string[];
  loading: boolean;
};

const initialState: CslinksState = {
  links: [],
  page: 1,
  items_per_page: 15,
  total_items: 0,
  pages_to_display: [],
  loading: false
};

const cslinksReducer = (
  state: CslinksState = initialState,
  action: any = {}
) => {
  switch (action.type) {
    case CslinksType.CHANGE_CSLINKSPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      } as CslinksState
    default:
      return state;
  }
};

export default cslinksReducer;
