"use client";
import { useCallback, useState } from "react";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { LinkState } from "@/reducers/linkReducer";

type Props = {
  password: string;
  changeLinkPageFields: ReduxUniversalSetter<LinkState>;
  submitPassword: (uuid: string) => void;
  uuid: string;
  errorPassword: boolean;
  passwordLoader: boolean;
};

const ViewModel: React.FC<Props> = ({
  password,
  changeLinkPageFields,
  uuid,
  errorPassword,
  submitPassword,
  passwordLoader,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      submitPassword(uuid);
    },
    [uuid]
  );

  const onChangePassword = useCallback((e: React.BaseSyntheticEvent) => {
    changeLinkPageFields({
      password: e.target.value,
    });
  }, []);

  const onPressCloseAlert = useCallback(() => {
    changeLinkPageFields({
      errorPassword: false,
    });
  }, []);

  return (
    <View
      {...{
        onSubmit,
        password,
        onChangePassword,
        errorPassword,
        onPressCloseAlert,
        passwordLoader,
        setShowPassword,
        showPassword
      }}
    />
  );
};

export default ViewModel;
