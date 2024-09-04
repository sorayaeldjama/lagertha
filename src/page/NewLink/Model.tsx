"use client";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";
import View from "./View";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NewLinkState } from "@/reducers/newLink";
import { Snack } from "@/types/snack";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;

  coins: number;
};
const ViewModel: React.FC<Props> = ({ coins , changeNewLinkPageFields }) => {
  const noCoins = useMemo(() => coins < 100, [coins]);

  return <View {...{ noCoins }} />;
};

export default ViewModel;
