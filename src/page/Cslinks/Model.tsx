"use client";
import { useCallback, useEffect } from "react";
import View from "./View";
import { LinkCustomerSuccessOutput } from "@/services/openapi";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { CslinksState } from "@/reducers/cslinksReducer";

type Props = {
  getCsLinks: VoidFunction;
  links: LinkCustomerSuccessOutput[];
  current_page: number;
  pages_to_display: string[];
  total_items: number;
  items_per_page: number;
  changeCslinksPageFields: ReduxUniversalSetter<CslinksState>
};

const ViewModel: React.FC<Props> = ({
  getCsLinks,
  links,
  current_page,
  pages_to_display,
  total_items,
  items_per_page,
  changeCslinksPageFields
}) => {
  useEffect(() => {
    getCsLinks();
  }, [current_page]);

  const change_page = useCallback((newPage: number) => {
    changeCslinksPageFields({ page: newPage })
  }, [changeCslinksPageFields])

  return (
    <View
      {...{
        links,
        current_page,
        pages_to_display,
        total_items,
        items_per_page,
        change_page
      }}
    />
  );
};

export default ViewModel;
