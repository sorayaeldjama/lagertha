'use client'
import { useEffect, useState } from 'react';
import View from './View';
import { useRouter } from 'next/navigation';
import { Page } from '@/enums/pages.enum';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { MainState } from '@/reducers/mainReducer';


type Props = {
  changeMainPageFields: ReduxUniversalSetter<MainState>;
  // isTransferHomeOpen: boolean;
  isLogged: boolean;
  coins: number;
}

const ViewModel: React.FC<Props> = ({
  changeMainPageFields,
  // isTransferHomeOpen,
  isLogged,
  coins
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      changeMainPageFields({ isSideBarOpen: true })
      router.push(Page.HOME);
    }
  }, [isLogged, router]);

  return (
    <View{...{coins,
      // isTransferHomeOpen
    }} />
  );
};

export default ViewModel;