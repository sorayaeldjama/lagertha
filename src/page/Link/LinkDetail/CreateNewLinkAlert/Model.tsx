'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { WelcomeState } from '@/reducers/welcomeReducer';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { Page } from '@/enums/pages.enum';
import { isMobile } from 'react-device-detect';


type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;

}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
}) => {

  useEffect(() => {
  }, [isMobile])

  const router = useRouter();

  const onCreateLink = useCallback(() => {
    router.push(Page.HOME);

    changeWelcomePageFields({})
  }, [changeWelcomePageFields])


  return (
    <View {...{ onCreateLink, isMobile }} />
  );
};

export default ViewModel;