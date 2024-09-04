'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { WelcomeState } from '@/reducers/welcomeReducer';

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  isLinkPasswordCopied: boolean;
  linkPassword: string;

}

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  isLinkPasswordCopied,
  linkPassword,
}) => {
  const onClickCopy = () => {
    navigator.clipboard.writeText(linkPassword);
    changeWelcomePageFields({ isLinkPasswordCopied: true })

    setTimeout(() => {
      changeWelcomePageFields({ isLinkPasswordCopied: false })
    }, 1500);
  };
  return (
    <View{...{
      isLinkPasswordCopied,
      onClickCopy,
      linkPassword
    }} />
  );
};

export default ViewModel;