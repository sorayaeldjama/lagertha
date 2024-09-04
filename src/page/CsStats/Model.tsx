"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";
import { DailyAnalyticOutput } from "@/services/openapi";
import { DateTime } from "luxon";

type Props = {
  getDailyAnalytics: VoidFunction;
  dailies: DailyAnalyticOutput[];
};

const ViewModel: React.FC<Props> = ({ getDailyAnalytics, dailies }) => {
  const [activeLinks, setActiveLinks] = useState<boolean>(true);
  const [createdLinks, setCreatedLinks] = useState<boolean>(true);
  const [openningLinks, setOpenningLinks] = useState<boolean>(true);
  const [uniqueEmailSent, setUniqueEmailSent] = useState<boolean>(true);
  useEffect(() => {
    getDailyAnalytics();
  }, []);

  const data = useMemo(() => {
    if (dailies.length === 0) return [];
    const data_array = [];
    if (activeLinks) {
      data_array.push({
        label: "Active links",
        data: dailies.map((daily) => ({
          date: DateTime.fromISO(daily.reference_date).toJSDate(),
          links: daily.active_links,
        })),
      });
    }
    if (createdLinks) {
      data_array.push({
        label: "Created links",
        data: dailies.map((daily) => ({
          date: DateTime.fromISO(daily.reference_date).toJSDate(),
          links: daily.day_links,
        })),
      });
    }
    if (openningLinks) {
      data_array.push({
        label: "Openning links",
        data: dailies.map((daily) => ({
          date: DateTime.fromISO(daily.reference_date).toJSDate(),
          links: daily.day_openning,
        })),
      });
    }
    if (uniqueEmailSent) {
      data_array.push({
        label: "Unique email sent",
        data: dailies.map((daily) => ({
          date: DateTime.fromISO(daily.reference_date).toJSDate(),
          links: daily.nb_differents_email_send,
        })),
      });
    }
    return data_array;
  }, [activeLinks, createdLinks, openningLinks, uniqueEmailSent, dailies]);

  const onChangeActiveLinks = useCallback(() => {
    setActiveLinks((prev) => !prev);
  }, []);
  const onChangeCreatedLinks = useCallback(() => {
    setCreatedLinks((prev) => !prev);
  }, []);
  const onChangeOpenningLinks = useCallback(() => {
    setOpenningLinks((prev) => !prev);
  }, []);
  const onChangeUniqueEmailSent = useCallback(() => {
    setUniqueEmailSent((prev) => !prev);
  }, []);

  return (
    <View
      {...{
        data,
        activeLinks,
        onChangeActiveLinks,
        createdLinks,
        openningLinks,
        uniqueEmailSent,
        onChangeCreatedLinks,
        onChangeOpenningLinks,
        onChangeUniqueEmailSent,
      }}
    />
  );
};

export default ViewModel;
