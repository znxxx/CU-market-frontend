"use client";
import { ProductBox } from "../../../../components/ProductBox";
import Navbar from "../../../../components/Navbar";
import Image from "next/image";
import Slider from "../../../../components/slider";
// import { usePathname } from "next/navigation";

function Home(props: any) {
  return (
    <main className="bg-[#353966] min-h-screen">
      <div>
        <Slider />
      </div>
      <div className="flex flex-row my-5 max-h-screen 2xl:gap-36 lg:gap-12 mb-32">
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
            <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
              <div>
                <Image
                  alt="Sample img"
                  className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl"
                  src="/images/Rectangle 22.png"
                  width={255}
                  height={159}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                  Product Name
                </div>
                <div className="flex flex-row justify-end">
                  <div className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold">
                    View all
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
              <div>
                <Image
                  alt="Sample img"
                  className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl"
                  src="/images/Rectangle 22.png"
                  width={255}
                  height={159}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                  Product Name
                </div>
                <div className="flex flex-row justify-end">
                  <div className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold">
                    View all
                  </div>
                </div>
              </div>
            </div>
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
            <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
              <div>
                <Image
                  alt="Sample img"
                  className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl"
                  src="/images/Rectangle 22.png"
                  width={255}
                  height={159}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                  Product Name
                </div>
                <div className="flex flex-row justify-end">
                  <div className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold">
                    View all
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
              <div>
                <Image
                  alt="Sample img"
                  className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl"
                  src="/images/Rectangle 22.png"
                  width={255}
                  height={159}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                  Product Name
                </div>
                <div className="flex flex-row justify-end">
                  <div className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold">
                    View all
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
              <div>
                <Image
                  alt="Sample img"
                  className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl"
                  src="/images/Rectangle 22.png"
                  width={255}
                  height={159}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                  Product Name
                </div>
                <div className="flex flex-row justify-end">
                  <div className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold">
                    View all
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
