"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { MainState } from "@/reducers/mainReducer";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Page } from "@/enums/pages.enum";
import { LinkOutput } from "@/services/openapi";
import { LinksState } from "@/reducers/linksReducer";

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeLinksPageFields: ReduxUniversalSetter<LinksState>;
  isLogged: boolean;
  links: LinkOutput[];
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;
  isConfirmDeleteLink: boolean;
  getLinks: VoidFunction;
};

const ViewModel: React.FC<Props> = ({
  changeMainPageFields,
  changeLinksPageFields,
  isLogged,
  links,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
  isConfirmDeleteLink,
  getLinks
}) => {
 
  const router = useRouter();

  useEffect(() => {
    getLinks()
  }, [current_page, getLinks])

  useEffect(() => {
    if (!isLogged) {
      changeMainPageFields({ isSideBarOpen: true });
      router.push(Page.HOME);
    }
  }, [isLogged, router]);

  const generate_url = (link: LinkOutput) => {
    const base = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER_URL || "";
    return `${base}/link/${link.uuid}`;
  };

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const calculate_link_size = (link: LinkOutput) => {
    let total = 0;
    for (const file of link.files || []) {
      total += file.size;
    }
    return total;
  };

  const copyLink = (link: LinkOutput) => () => {
    navigator.clipboard.writeText(generate_url(link));
  };

  const change_page = useCallback((newPage: number) => {
    changeLinksPageFields({ page: newPage })
  }, [changeLinksPageFields])

  const onClickDeleteLink = useCallback((uuid: string) => {
    changeLinksPageFields({ isConfirmDeleteLink: true, linkUuid: uuid })
  }, [changeLinksPageFields])

  const onClickLine = useCallback((currentLink: LinkOutput) => () => {
    changeLinksPageFields({currentLink})
  }, [])

  return (
    <View
      {...{
        links,
        generate_url,
        truncateString,
        calculate_link_size,
        copyLink,
        pages_to_display,
        current_page,
        change_page,
        total_items,
        items_per_page,
        onClickDeleteLink,
        isConfirmDeleteLink,
        onClickLine

      }}
    />
  );
};
export default ViewModel;
