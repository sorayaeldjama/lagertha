"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { WelcomeState } from "@/reducers/welcomeReducer";
import { useCallback } from "react";

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  linkPassword: string | null;
  showLoader: boolean;
  isLinkPasswordCopied: boolean;
  isConfirmCreateNewLink: boolean;
  isCguShown: boolean;
};

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  linkPassword,
  showLoader,
  isLinkPasswordCopied,
  isConfirmCreateNewLink,
  isCguShown
}) => {

  const onCloseConfirmCreateNewLink = useCallback(() => {
    if (linkPassword) {
      navigator.clipboard.writeText(linkPassword);
      changeWelcomePageFields({ isLinkPasswordCopied: true });
      setTimeout(() => {
        changeWelcomePageFields({ isLinkPasswordCopied: false });
      }, 1500);
    }
  }, [changeWelcomePageFields, linkPassword]);

  const resetLinkCreation = useCallback(() => {
    changeWelcomePageFields({
      uploadLoading: null,
      encryptionLoading: null,
      linkLoading: null,
      createdLink: null,
      selectedFile: null,
      isLinkEmailOpen: false,
      isLinkPasswordOpen: false,
      isCguShown :false
    });
  }, [changeWelcomePageFields]);

  const onAgreeCreateNewLink = useCallback(() => {
    changeWelcomePageFields({ isConfirmCreateNewLink: false });
    resetLinkCreation();
  }, [changeWelcomePageFields]);

  const onClickCreateNewLink = useCallback(() => {
    changeWelcomePageFields({
      isConfirmCreateNewLink: true,
      isCguChecked : false
    });
  }, [changeWelcomePageFields]);

  return (
    <View
      {...{
        linkPassword,
        resetLinkCreation,
        showLoader,
        isLinkPasswordCopied,
        isConfirmCreateNewLink,
        onCloseConfirmCreateNewLink,
        onAgreeCreateNewLink,
        onClickCreateNewLink,
        isCguShown
      }}
    />
  );
};

export default ViewModel;
