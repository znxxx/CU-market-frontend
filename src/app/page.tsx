import { ProductBox } from "../../components/ProductBox";
import Navbar from "../../components/Navbar";
import Image from "next/image";

function Home(props: any) {
  return (
    <main className="bg-[#353966] min-h-screen">
      <header className="bg-[#40477B] self-stretch flex w-full flex-col pb-2 max-md:max-w-full">
        <Navbar />
      </header>
      <section className="flex-col overflow-hidden self-stretch relative z-[1] flex w-full -mt-2 pt-[500px] pb-5 px-5 max-md:max-w-full bg-white">
        <div>
        </div>
      </section>
      <section className="flex justify-between mt-8 max-md:max-w-full max-md:flex-wrap pb-10">
        <div className="left-boxes">
          <div className="">
            <div
              id="today's picks"
              className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-[#6A5AFA] self-stretch flex flex-col px-5 py-1 rounded-3xl max-md:max-w-full h-[60px] ml-[50px]"
            >
              <div className="self-center flex w-[431px] max-w-full items-center flex-1 justify-center">
                <div className="text-stone-100 text-center text-[28px] font-bold">
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
          </div>
          <div id="content-left" className="box flex flex-row gap-20 ml-14">
            <ProductBox />
            <ProductBox />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            id="last-minute bids"
            className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-indigo-500 flex flex-col justify-center item-center rounded-3xl max-md:max-w-full h-[60px] w-[600px] mr-20 ml-60"
          >
            <div className="self-center flex max-w-[420px] justify-center items-center">
              <div className="text-stone-100 text-center text-[28px] font-bold">
                LAST MINUTE BIDS
              </div>
              <Image
                src="/images/icons/Fire.svg"
                alt="star"
                className="ml-3 mt-1"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <div className="box flex flex-row gap-28 ml-10 mr-28">
              <ProductBox />
              <ProductBox />
              <ProductBox />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
