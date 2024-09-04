'use client'
import View from './View';

type Props = {
  errorPassword: boolean;
  linkconfirmPasswordError: boolean;
  isPassEmpty: boolean;
  isEightCaracter: boolean;
  isUpperCaseLetter: boolean;
  isLowerCaseLetter: boolean;
  isDigit: boolean;
}
const ViewModel: React.FC<Props> = ({
  errorPassword,
  linkconfirmPasswordError,
  isPassEmpty,
  isEightCaracter,
  isUpperCaseLetter,
  isLowerCaseLetter,
  isDigit,
}) => {

  return (
    <View {...{
      errorPassword,
      linkconfirmPasswordError,
      isPassEmpty,
      isEightCaracter,
      isUpperCaseLetter,
      isLowerCaseLetter,
      isDigit,
    }} />
  );
};
export default ViewModel;