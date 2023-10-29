"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const linkPage = (page: string) => {
    router.push(page);
  };
  const pathname = usePathname();
  // console.log(pathname);

  const { data: session, status } = useSession();
  const access_paotungToken = session?.user.paotungToken;
  const [lightbulb, setLightbulb] = useState<number | null>(null);

  useEffect(() => {
    async function getMoney() {
      if (status === "loading") return;
      const res = await axios.get("https://paotooong.thinc.in.th/v1/auth/me", {
        headers: { Authorization: `Bearer ${access_paotungToken}` },
      });
      setLightbulb(res.data.user.money);
    }
    getMoney();
  }, [access_paotungToken, status]);

  return (
    <>
      <nav className="flex w-full items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center bg-[#353966] py-2">
        <div className="self-stretch flex flex-col items-center bg-[#353966]">
          <div className="relative mt-5 ml-5 bg-[#353966]">
            <div className="rounded-full bg-[#FF8BBC] w-[77px] h-[77px] flex items-center justify-center shadow-black shadow-inner ">
              <Image
                src="/images/icons/Light-bulb.svg"
                alt="logo"
                className=""
                width={60}
                height={60}
              />
            </div>
            <div className="text-stone-100 text-center text-xl font-medium mt-3 mb-3">
              {lightbulb === null ? "loading" : lightbulb}
            </div>
          </div>
        </div>
        <button onClick={() => linkPage("/u")}>
          <div className="self-center flex flex-col my-auto mt-[5px]">
            <Image
              src="/images/Cu-blackmarket-logo.svg"
              alt="logo"
              className="self-center"
              width={195}
              height={115}
            />
          </div>
        </button>

        <div className="self-center flex w-[77px] h-[77px] flex-col -mt-5 mr-4">
          <Image
            src="/images/icons/CU Black Market icon.svg"
            alt="profile-logo"
            className=""
            width={77}
            height={77}
          />
        </div>
      </nav>
      <nav className="self-stretch flex w-full px-5 py-3 justify-between max-md:max-w-full gradient-bg bg-[#353966]">
        <div className="flex max-w-full justify-between gap-5 ml-3 max-md:justify-center max-md:ml-2.5">
          <a
            href="/u"
            className={`text-${
              pathname == "/u" ? `[#353966]` : `stone-100`
            } text-center text-2xl font-medium self-center my-auto`}
          >
            HOME
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="/u/productlist"
            className={`text-${
              pathname.startsWith("/u/product") ? `[#353966]` : `stone-100`
            } text-center text-2xl font-medium self-center my-auto`}
          >
            MARKET
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="/u/create-product"
            className={`text-${
              pathname == "/u/create-product" ? `[#353966]` : `stone-100`
            } text-center text-2xl font-medium self-center my-auto`}
          >
            SELLING
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="/u/history/bid"
            className={`text-${
              pathname == "/u/history/bid" ? `[#353966]` : `stone-100`
            } text-center text-2xl font-medium self-center my-auto`}
          >
            MY BID
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="/u/history/sell"
            className={`text-${
              pathname == "/u/history/sell" ? `[#353966]` : `stone-100`
            } text-center text-2xl font-medium self-center my-auto`}
          >
            MY SELL
          </a>
        </div>
        <button
          onClick={() => signOut()}
          className={
            "text-stone-100 hover:text-[#353966] text-center text-2xl font-medium my-auto"
          }
        >
          LOG OUT
        </button>
      </nav>
    </>
  );
}
export default Navbar;
