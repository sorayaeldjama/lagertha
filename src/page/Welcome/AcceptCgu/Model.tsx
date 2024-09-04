'use client'
import { useCallback, useEffect, useState } from 'react';
import View from './View';
import { changeWelcomePageFields } from '@/actions/welcome';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { WelcomeState } from '@/reducers/welcomeReducer';

type Props = {
  changeWelcomePageFields:ReduxUniversalSetter<WelcomeState>;
  isConfirmCguOpen: boolean;
  isCguChecked: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  isConfirmCguOpen,
  isCguChecked
}) => {
  const [canClickOk, setCanClickOk] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCguChecked]);

  const onConfirmCgu = useCallback(() => {
    changeWelcomePageFields({isConfirmCguOpen :false ,isCguChecked:true ,isGetLinkDisabled:false , isAcceptedCguOnce :true})
  }, [changeWelcomePageFields]);

  const onCloseModelCgu = useCallback(() => {
    changeWelcomePageFields({isConfirmCguOpen :false  ,isGetLinkDisabled:true , isCguChecked:false})
  }, [changeWelcomePageFields]);


  const handleScroll = (e: Event) => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    // Activer le bouton OK uniquement si la case à cocher est cochée et l'utilisateur est au bas de la page
    setCanClickOk(isCguChecked && isAtBottom);
  };

  return (
    <View {...{
      isConfirmCguOpen,
      isCguChecked,
      onConfirmCgu,
      onCloseModelCgu

    }} />
  );
};

export default ViewModel;