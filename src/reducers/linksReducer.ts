import { LinksType } from '@/actions/links';
import { LinkOpenningOutput, LinkOutput, LinkSendOutput } from '@/services/openapi';

export type LinksState = {
  links: LinkOutput[],
  page: number,
  items_per_page: number,
  total_items: number,
  pages_to_display: string[],
  isConfirmDeleteLink: boolean,
  linkUuid: string | null;
  isDeleted: boolean;
  loading: boolean;
  isAddPasswordOpen: boolean;
  isPasswordAdded: boolean;
  isSnackOpen : boolean;
  currentLink: null | LinkOutput;
  openningPage: number;
  opennings: LinkOpenningOutput[];
  links_sent: LinkSendOutput[],
  deleteLinkSnackSuccess:string,
  deleteLinkSnakError:string,
}

const initialState: LinksState = {
  links: [],
  page: 1,
  items_per_page: 15,
  total_items: 0,
  pages_to_display: [],
  isConfirmDeleteLink: false,
  linkUuid: "",
  isDeleted: false,
  loading: false,
  isAddPasswordOpen: false,
  isPasswordAdded: false,
  isSnackOpen:false,
  currentLink: null,
  openningPage: 1,
  opennings: [],
  links_sent: [],
  deleteLinkSnackSuccess:"",
  deleteLinkSnakError:""
};

const linksReducer = (state: LinksState = initialState, action: any = {}) => {
  switch (action.type) {
    case LinksType.CHANGE_LINKSPAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      } as LinksState
    default:
      return state;
  }
};

export default linksReducer;
