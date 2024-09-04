"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { WelcomeState } from "@/reducers/welcomeReducer";
import humanFileSize from "@/utils/humanFileSize";
import { isNullOrUndefined } from "util";
import { useRouter } from "next/navigation";
import { Page } from "@/enums/pages.enum";

type Props = {
  changeWelcomePageFields: ReduxUniversalSetter<WelcomeState>;
  createFreeLink: VoidFunction;
  sendLinkByEmail: VoidFunction;
  selectedFile: null | File;
  maxSizeError: boolean;
  uploadLoading: boolean | null;
  encryptionLoading: boolean | null;
  linkLoading: boolean | null;
  isLinkPasswordOpen: boolean;
  isLinkEmailOpen: boolean;
  showLoader: boolean;
  isCguChecked: boolean;
  isGetLinkDisabled: boolean;
  isConfirmCguOpen: boolean;
  isCguShown: boolean;
  isAcceptedCguOnce: boolean;
};

const ViewModel: React.FC<Props> = ({
  changeWelcomePageFields,
  createFreeLink,
  sendLinkByEmail,
  selectedFile,
  maxSizeError,
  uploadLoading,
  encryptionLoading,
  linkLoading,
  isLinkPasswordOpen,
  isLinkEmailOpen,
  showLoader,
  isCguChecked,
  isGetLinkDisabled,
  isConfirmCguOpen,
  isCguShown,
  isAcceptedCguOnce
}) => {

  const router = useRouter();

  const resetLinkCreation = useCallback(() => {
    changeWelcomePageFields({
      uploadLoading: null,
      encryptionLoading: null,
      linkLoading: null,
      createdLink: null,
      selectedFile: null
    })
  }, [changeWelcomePageFields])

  useEffect(() => {
    const termsAccepted = localStorage.getItem('termsAccepted');
    resetLinkCreation()
    if (termsAccepted) {
      changeWelcomePageFields({ isGetLinkDisabled: false, isCguShown: false })
    } else {
      changeWelcomePageFields({ isGetLinkDisabled: true, isCguChecked: false })
    }
  }, [changeWelcomePageFields,resetLinkCreation]);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {

      const files = event.target.files;
      const maxAllowedSize = 5 * 1024 * 1024;
      if (files && files.length > 0) {
        if (files[0].size < maxAllowedSize) {
          changeWelcomePageFields({
            selectedFile: files[0],
            maxSizeError: false,
            uploadFileError: false,
            isUploadAnotherFileOpen: true
          });
        } else {
          changeWelcomePageFields({ maxSizeError: true });
        }
      }
    },
    [changeWelcomePageFields, selectedFile, router]
  );
  const onClickUploadFile = useCallback(() => {
    // changeSinupPageFields({ loader: true });

    router.push(Page.SIGNUP)

  }, [router]);


  const removeErrorSize = useCallback(() => {
    changeWelcomePageFields({ maxSizeError: false });
  }, [changeWelcomePageFields]);

  const fileName = useMemo(
    () => (selectedFile ? selectedFile.name : null),
    [selectedFile]
  );

  const fileSize = useMemo(
    () => (selectedFile ? humanFileSize(selectedFile.size, true) : null),
    [selectedFile]
  );

  const deletedSelectedFile = useCallback(() => {
    changeWelcomePageFields({ selectedFile: null });
  }, [changeWelcomePageFields]);

  const createLink = useCallback(() => {
    const maxAllowedSize = 5 * 1024 * 1024;
    if (selectedFile) {
      if (selectedFile.size < maxAllowedSize) {
        createFreeLink();
      } else {
        changeWelcomePageFields({ maxSizeError: true });
      }
    } else {
      changeWelcomePageFields({ uploadFileError: true });
    }
  }, [changeWelcomePageFields, createFreeLink, selectedFile]);


  const onClickReadCgu = useCallback(() => {
    changeWelcomePageFields({ isConfirmCguOpen: true })
  }, [changeWelcomePageFields]);

  const onChangeCheck = useCallback((e: React.BaseSyntheticEvent) => {
    const checked = e.target.checked
    if (!checked) {
      changeWelcomePageFields({ isGetLinkDisabled: true })
    } else {
      changeWelcomePageFields({ isGetLinkDisabled: false })
    }
    localStorage.setItem('termsAccepted', checked);

    changeWelcomePageFields({ isCguChecked: checked, isAcceptedCguOnce: checked })
  }, [changeWelcomePageFields])

  const onClickIReadCgu = useCallback((e: React.BaseSyntheticEvent) => {
    e.stopPropagation()
    changeWelcomePageFields({ isGetLinkDisabled: false })
  }, [changeWelcomePageFields]);

  const onSendLinkByEmail = useCallback(() => {
    sendLinkByEmail();
  }, [changeWelcomePageFields, sendLinkByEmail]);

  // const onChangeEmail = useCallback((e: React.BaseSyntheticEvent) => {
  //   const newValue = e.target.value;
  //   changeWelcomePageFields({ emailSendLink: newValue });
  // }, [changeWelcomePageFields]);

  const onChangeEmail = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const newValue = e.target.value;
      changeWelcomePageFields({ emailSendLink: newValue });
    },
    [changeWelcomePageFields]
  );

  const isSecondPanel = useMemo(() => {
    return (
      uploadLoading !== null ||
      encryptionLoading !== null ||
      linkLoading !== null
    );
  }, [uploadLoading, encryptionLoading, linkLoading]);

  return (
    <View
      {...{
        handleFileChange,
        maxSizeError,
        removeErrorSize,
        fileName,
        fileSize,
        deletedSelectedFile,
        selectedFile,
        uploadLoading,
        encryptionLoading,
        linkLoading,
        createLink,
        resetLinkCreation,
        onSendLinkByEmail,
        // onChangeEmail,
        isLinkPasswordOpen,
        isLinkEmailOpen,
        showLoader,
        isSecondPanel,
        isCguChecked,
        isGetLinkDisabled,
        onChangeCheck,
        isConfirmCguOpen,
        onClickReadCgu,
        onClickIReadCgu,
        isCguShown,
        onClickUploadFile
      }} />
  );
};
export default ViewModel;
