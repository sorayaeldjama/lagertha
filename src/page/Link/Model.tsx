"use client";
import { useEffect } from "react";
import View from "./View";
import { useSearchParams } from "next/navigation";
import { LinkOutput } from "@/services/openapi";

type Props = {
  uuid: string;
  loading: boolean;
  connectUserLink: (uuid: string, p: string) => void;
  currentLink: null | LinkOutput;
  password_need: boolean,
};

const ViewModel: React.FC<Props> = ({
  uuid,
  loading,
  connectUserLink,
  currentLink,
  password_need
}) => {
  const searchParams = useSearchParams();

  const p = searchParams.get("p");
  useEffect(() => {
    if (p) {
      connectUserLink(uuid, p as string);
    }
  }, [uuid, p, connectUserLink]);

  return <View {...{ uuid, loading, currentLink, password_need }} />;
};

export default ViewModel;
