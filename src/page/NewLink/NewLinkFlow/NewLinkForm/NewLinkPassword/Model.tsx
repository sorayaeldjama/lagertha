'use client'
import { useCallback, useEffect, useState } from 'react';
import View from './View';
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import { NewLinkState } from '@/reducers/newLink';
import { usePathname } from 'next/navigation';

type Props = {
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
  password: string;
  noPassword: boolean;
  errorPassword: boolean;
  confirmPassword: string;
}
const ViewModel: React.FC<Props> = ({
  changeNewLinkPageFields,
  password,
  noPassword,
  errorPassword,
  confirmPassword,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  useEffect(() => {
    changeNewLinkPageFields({
      errorPassword: false,
      confirmPassword: "",
      password: "",
      linkconfirmPasswordError: false,
      noPassword: false,
      isEightCaracter: false,
      isLowerCaseLetter: false,
      errorFile: false
    })
  }, [changeNewLinkPageFields])

  const onChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value;
    changeNewLinkPageFields({
      password: newValue,
    });
  }, [changeNewLinkPageFields,]);

  const onChangeConfirmPassword = useCallback((e: React.BaseSyntheticEvent) => {
    let error = false;
    if (!noPassword && password === confirmPassword) {
      error = false;
      changeNewLinkPageFields({
        linkconfirmPasswordError: false
      });
    }
    changeNewLinkPageFields({
      confirmPassword: e.target.value,
    });
  }, [changeNewLinkPageFields, noPassword, password, confirmPassword]);

  const onChangeNoPassword = useCallback((e: React.BaseSyntheticEvent) => {
    changeNewLinkPageFields({
      noPassword: e.target.checked,
      errorPassword: false,
      linkconfirmPasswordError: false
    });
  }, [noPassword, password, confirmPassword]);

  return (
    <View {...{
      onChangeNoPassword,
      onChangeConfirmPassword,
      onChangePassword,
      setShowPassword,
      password,
      showPassword,
      noPassword,
      errorPassword,
      confirmPassword,
    }} />
  );
};
export default ViewModel;
