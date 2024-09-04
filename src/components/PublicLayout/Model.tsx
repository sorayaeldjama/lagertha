'use client'
import { ReactNode, useCallback, useEffect, useState } from 'react';
import View from './View';
import { useRouter } from 'next/navigation';
import { Page } from '@/enums/pages.enum';
import { useColorScheme } from '@mui/joy';
import { getParams } from '@/actions/settings';
import { Theme_Color } from '@/enums/themeColor.enum';

type Props = {
  getParamsLanguage:VoidFunction;
  children: ReactNode;
  title: string;
  is_center?: boolean;
  mode: string;
  lightMode: Theme_Color | null;

}

const ViewModel: React.FC<Props> = ({ children, title, is_center = true, mode: string, lightMode }) => {

  useEffect(() => {
    getParams()
  }, [getParams])
  const themeColor = localStorage.getItem("color_theme")

  const router = useRouter()

  const onPressHome = useCallback(() => {
    router.push(Page.HOME)
  }, [router])

  return (
    <View {...{ title, onPressHome, is_center }}>{children}</View>
  );
};

export default ViewModel;