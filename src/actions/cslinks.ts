import { CslinksState } from "@/reducers/cslinksReducer";

export enum CslinksType {
  CHANGE_CSLINKSPAGE_FIELDS = "CHANGE_CSLINKSPAGE_FIELDS",
  GET_CS_LINKS = "GET_CS_LINKS",
}

export const changeCslinksPageFields = (payload: Partial<CslinksState>) => ({
  type: CslinksType.CHANGE_CSLINKSPAGE_FIELDS,
  payload,
});

export const getCsLinks = () => ({
  type: CslinksType.GET_CS_LINKS
})