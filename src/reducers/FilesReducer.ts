import { FilesType } from '@/actions/files';
import { FileMetaOutput } from '@/services/openapi';
export type FilesState = {
  files: FileMetaOutput[],
  page: number,
  items_per_page: number,
  total_items: number,
  pages_to_display: string[],
  isConfirmDeleteFile: boolean,
  isDeleted: boolean;
  loading: boolean;
  fileId: string;
  downloadFileLoader :boolean;
  isSnackOpen:boolean;
  deleteFileSnackSuccess :string ; 
  deleteFileSnackError:string; 
}

const initialState: FilesState = {
  files: [],
  page: 1,
  items_per_page: 15,
  total_items: 0,
  pages_to_display: [],
  isConfirmDeleteFile: false,
  isDeleted: false,
  loading: false,
  fileId: "",
  downloadFileLoader:false,
  isSnackOpen:false,
  deleteFileSnackSuccess:"",
  deleteFileSnackError:""
};

const filesReducer = (state: FilesState = initialState, action: any = {}) => {
  switch (action.type) {
    case FilesType.CHANGE_FILES_PAGE_FIELDS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filesReducer;
