"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { NewLinkState } from "@/reducers/newLink";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
  newLinkName: string;
  linkNameError: boolean;
  emails: string[];
};
const ViewModel: React.FC<Props> = ({
  changeNewLinkPageFields,
  newLinkName,
  linkNameError,
  emails,
}) => {
  const [emailField, setEmailField] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const { t } = useTranslation()

  useEffect(() => {
    changeNewLinkPageFields({
      snackCreateNewLinkSucces: t('Middlewares_New_Link_Send_Link_Snack_Success'),
      snackCreateNewLinkError: t('Middlewares_New_Link_Send_Link_Snack_Error')
    })
  }, [changeNewLinkPageFields])
  useEffect(() => {
    changeNewLinkPageFields({
      isFormNewLinkOpen: true,
      isNewLinkCreated: false,
      loader: false,
      newLinkName: "",
      selectedFile: null,
      password: "",
      isErrorLinkName: true,
      isOnClickNextLinkName: false,
      uploadFileError: false,
      errorFile: false,
      linkNameError: false,
    });
  }, [changeNewLinkPageFields]);

  const onChangeNewLinkName = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const newValue = e.target.value;
      if (newValue.trim().length > 1) {
        changeNewLinkPageFields({
          linkNameError: false,
        });
      }
      changeNewLinkPageFields({ newLinkName: newValue });
    },
    [changeNewLinkPageFields, newLinkName]
  );

  const regexEmail = useMemo(
    () => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
    []
  );

  const onChangeEmailField = useCallback((e: React.BaseSyntheticEvent) => {
    setEmailField(e.target.value);
    if (regexEmail.test(e.target.value)) {
      setErrorEmail(false)
    }
  }, [regexEmail]);

  const onSubmitEmail = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      if (!regexEmail.test(emailField)) {
        setErrorEmail(true);
        return;
      }
      if (emails.find((email) => email === emailField)) return;
      changeNewLinkPageFields({
        emails: [...emails, emailField],
      });
      setEmailField("");
    },
    [regexEmail, emailField, emails, changeNewLinkPageFields]
  );

  const deleteEmail = useCallback(
    (email: string) => () => {
      changeNewLinkPageFields({
        emails: emails.filter((item) => item !== email),
      });
    },
    [emails, changeNewLinkPageFields]
  );

  return (
    <View
      {...{
        onChangeNewLinkName,
        linkNameError,
        newLinkName,
        emails,
        onChangeEmailField,
        emailField,
        onSubmitEmail,
        deleteEmail,
        errorEmail,
      }}
    />
  );
};

export default ViewModel;
