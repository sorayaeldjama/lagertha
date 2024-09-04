"use client";
import { useEffect, useMemo } from "react";
import View from "./View";
import { SystemInformationOutput } from "@/services/openapi";
import humanFileSize from "@/utils/humanFileSize";

type Props = {
  getAdminSystemInfo: VoidFunction;
  resetAdminSystemInfo: VoidFunction;
  infos: SystemInformationOutput[];
};

const ViewModel: React.FC<Props> = ({
  getAdminSystemInfo,
  resetAdminSystemInfo,
  infos,
}) => {
  useEffect(() => {
    getAdminSystemInfo();
    const count = setInterval(getAdminSystemInfo, 1000);
    return () => {
      clearInterval(count);
      resetAdminSystemInfo();
    };
  }, []);

  const data = useMemo(() => {
    if (infos.length === 0) return [];
    const data_array = [];
    data_array.push({
      label: "Used memory (RAM)",
      data: infos.map((info, index) => ({
        index,
        value: (info.used_memory / info.total_memory) * 100,
      })),
    });
    return data_array;
  }, [infos]);

  const totalMemory = useMemo(
    () =>
      infos && infos.length > 0
        ? humanFileSize(
            ([...infos].pop() as SystemInformationOutput).total_memory,
            true
          )
        : "0",
    [infos]
  );
  const memoryUsed = useMemo(
    () =>
      infos && infos.length > 0
        ? humanFileSize(
            ([...infos].pop() as SystemInformationOutput).used_memory,
            true
          )
        : "0",
    [infos]
  );

  return <View {...{ data, memoryUsed, totalMemory }} />;
};

export default ViewModel;
