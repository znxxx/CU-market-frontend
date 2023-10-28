"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

import useCountdown from "@/hooks/useCountdown";
import { HistoryProductBox } from "../../../../../components/HistoryProductBox";

function useFetchAvailable() {
  const [loadingOnAvailable, setLoadingOnAvailable] = useState(true);
  const [errorOnAvailable, setErrorOnAvailable] = useState(false);
  const [availableList, setAvailableList] = useState<any[]>([]);

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;

  const sendQuery = useCallback(async () => {
    if (status === "loading") return;
    try {
      setLoadingOnAvailable(true);
      setErrorOnAvailable(false);
      const res = await axios.get(`http://localhost:4000/product/available`, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      setAvailableList([...res.data]);
      setLoadingOnAvailable(false);
    } catch (err) {
      setErrorOnAvailable(true);
    }
  }, [access_token, status]);

  useEffect(() => {
    sendQuery();
  }, [status, availableList]);

  return { loadingOnAvailable, errorOnAvailable, availableList };
}

function useFetchExpired() {
  const [loadingOnExpired, setLoadingOnExpired] = useState(true);
  const [errorOnExpired, setErrorOnExpired] = useState(false);
  const [expiredList, setExpiredList] = useState<any[]>([]);

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;

  const sendQuery = useCallback(async () => {
    if (status === "loading") return;
    try {
      setLoadingOnExpired(true);
      setErrorOnExpired(false);
      const res = await axios.get(`http://localhost:4000/product/expired`, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      setExpiredList([...res.data]);
      setLoadingOnExpired(false);
    } catch (err) {
      setErrorOnExpired(true);
    }
  }, [access_token, status]);

  useEffect(() => {
    sendQuery();
  }, [status]);

  return { loadingOnExpired, errorOnExpired, expiredList };
}

function MySell() {
  const { loadingOnAvailable, errorOnAvailable, availableList } =
    useFetchAvailable();
  const { loadingOnExpired, errorOnExpired, expiredList } = useFetchExpired();

  //Timer function
  const { secondsLeft, start } = useCountdown();

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;
  const access_studentId = session?.user.studentId;

  async function setStart() {
    if (status === "loading") return;

    try {
      start(60);
    } catch (error) {}
  }
  useEffect(() => {
    setStart();
  }, [status]);

  return (
    <>
      <div className="flex flex-col bg-[#353966] h-full">
        <div className="mx-8 my-5 text-stone-100 font-normal text-2xl">
          In Progress
        </div>
        <div className="flex flex-col gap-4">
          {availableList.map((item) => (
            <HistoryProductBox key={item.id} product={item} />
          ))}
        </div>
        <div className="flex flex-row gap-5 mx-8 m-2 mb-3 text-stone-100 font-normal text-2xl">
          Finished
        </div>
        <div className="flex flex-col gap-4">
          {expiredList.map((item) => (
            <HistoryProductBox key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MySell;
