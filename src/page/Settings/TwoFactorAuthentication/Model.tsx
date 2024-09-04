'use client'
import { ReduxUniversalSetter } from '@/types/ReduxUniversalSetter';
import View from './View';
import { SettingsState } from '@/reducers/settingsReducer';
import { useCallback, useEffect } from 'react';

type Props = {
  changeSettingsPageFields: ReduxUniversalSetter<SettingsState>;
  applyMfa: VoidFunction;
  disableMfa: VoidFunction;
  is_2fa: boolean;
  otp_code: string | null;
  totp: string;
  mfa_loading: boolean;
  totpDisable: string;
  switchChecked: boolean;
  isDisableMfaOpen: boolean;
  isEnableMfaOpen: boolean;
  isMfaActive: boolean;
}

const ViewModel: React.FC<Props> = ({
  changeSettingsPageFields,
  applyMfa,
  disableMfa,
  is_2fa,
  otp_code,
  totp,
  mfa_loading,
  totpDisable,
  switchChecked,
  isDisableMfaOpen,
  isEnableMfaOpen,
  isMfaActive

}) => {

 useEffect(() => {
  changeSettingsPageFields({ totpDisable: "" })
}, [disableMfa])

  const onDisableTwoFactor = useCallback(() => {
    disableMfa()
  }, [disableMfa])

  const onCloseConfirmEnableMfa = useCallback(() => {
    changeSettingsPageFields({ isEnableMfaOpen: false })
  }, [changeSettingsPageFields])

  const onCloseConfirmDisableMfa = useCallback(() => {
    changeSettingsPageFields({ isDisableMfaOpen: false })
  }, [changeSettingsPageFields])

  const onManageMfa = useCallback(() => {
    if (is_2fa) {
      changeSettingsPageFields({ isEnableMfaOpen: false, isDisableMfaOpen: true,   })

    } else {

      changeSettingsPageFields({ isEnableMfaOpen: true, isDisableMfaOpen: false, })
    }
  }, [changeSettingsPageFields,is_2fa])


  const onChangeTotp = useCallback((e: React.BaseSyntheticEvent) => {
    if (/^[0-9]{0,6}$/.test(e.target.value)) {
      changeSettingsPageFields({
        totp: e.target.value
      })
    }
  }, [changeSettingsPageFields])

  const onChangeTotpDisable = useCallback((e: React.BaseSyntheticEvent) => {
    const newValue = e.target.value
    if (/^[0-9]{0,6}$/.test(newValue)) {
      changeSettingsPageFields({
        totpDisable: newValue
      })
    }
  }, [changeSettingsPageFields])

  const apply2fa = useCallback(() => {
    let error = false
    if (!/^[0-9]{6}$/.test(totp)) {
      error = true
    }
    if (!error) {
      applyMfa()
    }
  }, [totp])
  return (
    <View {...{
      applyMfa,
      disableMfa,
      is_2fa,
      otp_code,
      totp,
      mfa_loading,
      totpDisable,
      switchChecked,
      onDisableTwoFactor,
      onChangeTotp,
      onChangeTotpDisable,
      apply2fa,
      isDisableMfaOpen,
      isEnableMfaOpen,
      onCloseConfirmEnableMfa,
      onManageMfa,
      isMfaActive,
      onCloseConfirmDisableMfa
    }} />
  );
};

export default ViewModel;