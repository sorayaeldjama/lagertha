import { LinksState } from "@/reducers/linksReducer";

export enum LinksType {
  CHANGE_LINKSPAGE_FIELDS = 'CHANGE_LINKSPAGE_FIELDS',
  GET_LINKS = "GET_LINKS",
  DELETE_LINK = "DELETE_LINK",
  GET_LINK_OPENNING = "GET_LINK_OPENNING",
  GET_LINK_SENT = "GET_LINK_SENT"
}

export const changeLinksPageFields = (payload: Partial<LinksState>) => ({
  type: LinksType.CHANGE_LINKSPAGE_FIELDS,
  payload,
});

export const get_links = () => ({
  type: LinksType.GET_LINKS
})

export const delete_link = () => ({
  type: LinksType.DELETE_LINK
})

export const getLinkOpenning = () => ({
  type: LinksType.GET_LINK_OPENNING
})

export const getLinkSent = () => ({
  type: LinksType.GET_LINK_SENT
})