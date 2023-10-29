"use client";
import Image from "next/image";
import Slider from "../../../components/slider";
import { ProductBox } from "../../../components/ProductBox";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
// import { usePathname } from "next/navigation";

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
      const res = await axios.get(`http://localhost:4000/product/lastmin`, {
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
  }, [status]);

  return { loadingOnAvailable, errorOnAvailable, availableList };
}

function Home(props: any) {
  const { loadingOnAvailable, errorOnAvailable, availableList } =
    useFetchAvailable();
  return (
    <main className="bg-[#353966] min-h-screen">
      <div>
        <Slider />
      </div>
      <div className="flex flex-row mt-5 max-h-screen 2xl:gap-36 lg:gap-12 pb-5">
        <div className="flex flex-col justify-start gap-7">
          <div className="flex flex-col bg-[#FF8BBC] w-[431px] h-[55px] text-center mx-[51px] rounded-[20px] text-2xl py-3 text-stone-100 font-extrabold shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(69,13,37,0.20)_inset]">
            <div className="flex flex-row justify-center">
              <div>TODAY'S PICK</div>
              <div>
                <Image
                  src="/images/icons/Star.svg"
                  alt="star"
                  className="-m-1.5 ml-1"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row mx-[30px] gap-14">
            {availableList.slice(3, 5).map((item, i) => (
              <ProductBox key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col px-[51px] gap-7 items-center">
          <div className="flex flex-col bg-[#FF8BBC] w-[431px] h-[55px] text-center mx-[51px] rounded-[20px] text-2xl py-3 text-stone-100 font-extrabold shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(69,13,37,0.20)_inset]">
            <div className="flex flex-row justify-center">
              <div>LAST MINUTE BID</div>
              <div>
                <Image
                  src="/images/icons/Fire.svg"
                  alt="star"
                  className="-m-1.5 ml-1"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-14">
            {availableList.slice(0, 3).map((item, i) => (
              <ProductBox key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
