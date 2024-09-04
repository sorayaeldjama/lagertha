"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";
import { NewLinkState } from "@/reducers/newLink";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  createdLink: string;
  password: string;
  resertNewLink: VoidFunction;
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;
};

const ViewModel: React.FC<Props> = ({
  createdLink,
  password,
  resertNewLink,
  changeNewLinkPageFields
}) => {
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false)
  const [isPasswordCopied, setIsPasswordCopied] = useState<boolean>(false)
  const [revealPassword, setRevealPassword] = useState<boolean>(false)

 

  const onClickLink = useCallback(() => {
    setIsLinkCopied(true);
    navigator.clipboard.writeText(createdLink);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 1500);
  }, [createdLink]);

  const onClickPassword = useCallback(() => {
    setIsPasswordCopied(true);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setIsPasswordCopied(false);
    }, 1500);
  }, [password]);

  const onClickReveal = useCallback(() => {
    setRevealPassword(prev => !prev)
  }, [])

  const onClickCreateNewLink = useCallback(() => {
    resertNewLink()
  }, [resertNewLink]);

  const onClickSendLinkByEmail = useCallback(() => {
    changeNewLinkPageFields({ isSendByEmailOpen: true })

  }, [changeNewLinkPageFields]);

  return (
    <View
      {...{
        createdLink,
        isLinkCopied,
        password,
        onClickLink,
        revealPassword,
        onClickReveal,
        onClickCreateNewLink,
        onClickSendLinkByEmail,
        isPasswordCopied,
        onClickPassword
      }}
    />
  );
};

export default ViewModel;
