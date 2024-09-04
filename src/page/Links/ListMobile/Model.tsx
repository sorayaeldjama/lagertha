'use client'
import { FileMetaOutput, LinkOutput } from '@/services/openapi';
import View from './View';
import { LinksState } from '@/reducers/linksReducer';
import { MainState } from '@/reducers/mainReducer';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { useCallback } from 'react';

type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  changeLinksPageFields: ReduxUniversalSetter<LinksState>;
  links: LinkOutput[];
  pages_to_display: string[];
  current_page: number;
  total_items: number;
  items_per_page: number;
  isConfirmDeleteLink: boolean,

}

const ViewModel: React.FC<Props> = ({
  links,
  isConfirmDeleteLink,
  changeMainPageFields,
  changeLinksPageFields,
  pages_to_display,
  current_page,
  total_items,
  items_per_page,
}) => {
  const generate_url = (link: LinkOutput) => {
    const base = process.env.NEXT_PUBLIC_LAGERTHA_TRANSFER_URL || "";
    return `${base}/link/${link.uuid}?p=${link.temp_p}`;
  };
  const copyLink = (link: LinkOutput) => () => {
    navigator.clipboard.writeText(generate_url(link));
  };

  const onClickDeleteLink = useCallback((uuid: string) => {
    changeLinksPageFields({ isConfirmDeleteLink: true, linkUuid: uuid })
  }, [changeLinksPageFields])

  const calculate_link_size = (link: LinkOutput) => {
    let total = 0;
    for (const file of link.files || []) {
      total += file.size;
    }
    return total;
  };

  const change_page = useCallback((newPage: number) => {
    changeLinksPageFields({ page: newPage })
  }, [changeLinksPageFields])


  return (
    <View {...{
      links,
      isConfirmDeleteLink,
      copyLink,
      generate_url,
      onClickDeleteLink,
      calculate_link_size,
      pages_to_display,
      current_page,
      total_items,
      items_per_page,
      change_page

    }} />
  );
};

export default ViewModel;