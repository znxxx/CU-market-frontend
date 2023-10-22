'use client'
import { link } from "fs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const linkPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <nav className="flex w-full items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="self-stretch flex flex-col items-center">
          <div className="relative mt-5 ml-5">
            <div className="rounded-full bg-[#FF8BBC] w-[77px] h-[77px] flex items-center justify-center shadow-black shadow-inner">
              <Image
                src="/images/icons/Light-bulb.svg"
                alt="logo"
                className=""
                width={60}
                height={60}
              />
            </div>
            <div className="text-stone-100 text-center text-xl font-medium mt-3">
              10,000
            </div>
          </div>
        </div>
        <button onClick={() => linkPage('/')}>
          <div className="self-center flex flex-col my-auto mt-[10px]">
            <Image
              src="/images/Cu-blackmarket-logo.svg"
              alt="logo"
              className="self-center"
              width={195}
              height={115}
            />
          </div>
        </button>
        <div className="self-center flex w-[77px] h-[77px] flex-col my-auto mr-5">
          <Image
            src="/images/icons/CU Black Market icon.svg"
            alt="logo"
            className=""
            width={77}
            height={77}
          />
        </div>
      </nav>
      <nav className="self-stretch flex w-full flex-col mt-4 px-5 py-3.5 max-md:max-w-full gradient-bg">
        <div className="flex w-[366px] max-w-full items-start justify-between gap-5 ml-3 max-md:justify-center max-md:ml-2.5">
          <a
            href="#"
            className="text-stone-100 text-center text-2xl font-medium self-center my-auto"
          >
            HOME
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="#"
            className="text-stone-100 text-center text-2xl font-medium self-center my-auto"
          >
            BIDDING
          </a>
          <div className="bg-stone-100 self-stretch w-[3px] h-[35px]" />
          <a
            href="#"
            className="text-stone-100 text-center text-2xl font-medium self-center my-auto"
          >
            SELLING
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
