"use client";
import { ProductBox } from "../../components/ProductBox";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Slider from "../../components/slider";

function Home(props: any) {
  return (
    <main className="bg-[#353966] min-h-screen">
      <header className="bg-[#40477B] self-stretch flex w-full flex-col max-md:max-w-full">
        <Navbar />
      </header>
      <section className="">
        <div>
          <Slider />
        </div>
      </section>
      <section className="flex justify-between mt-6 max-md:max-w-full max-md:flex-wrap pb-10">
        <div className="left-boxes">
          <div
            id="today's picks"
            className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-[#6A5AFA] self-stretch flex flex-col px-5 lg:py-0.25 2xl:py-1 rounded-3xl max-md:max-w-full ml-16 max-md:ml-0 lg:ml-22 2xl:ml-20 mb-2 mr-3"
          >
            <div className="self-center flex w-[430-px] max-w-full items-center flex-1 justify-center">
              <div className="text-stone-100 text-center 2xl:text-[28px] lg:text-[25px] font-bold">
                TODAY’S PICKS
              </div>
              <Image
                src="/images/icons/Star.svg"
                alt="star"
                className="ml-3 mt-1"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div
            id="content-left"
            className="box flex flex-row gap-24 max-md:ml-10 lg:ml-10 2xl:ml-22 2xl:gap-24 lg:gap-12"
          >
            <ProductBox />
            <ProductBox />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            id="last-minute bids"
            className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-indigo-500 flex flex-col justify-center item-center rounded-3xl max-md:max-w-full max-md:ml-0 md:mr-10 max-md:mr-30 lg:mr-24 lg:ml-12 2xl:mr-28 2xl:ml-20 mb-2"
          >
            <div className="self-center flex max-w-[420px] justify-center items-center">
              <div className="text-stone-100 text-center 2xl:text-[28px] lg:text-[25px] font-bold 2xl:py-2">
                LAST MINUTE BIDS
              </div>
              <Image
                src="/images/icons/Fire.svg"
                alt="star"
                className="ml-3 2xl:mt-1"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="box flex flex-row gap-5 ml-2 max-md:ml-0 lg:mr-12 2xl:mr-20 2xl:gap-24 lg:gap-12">
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
