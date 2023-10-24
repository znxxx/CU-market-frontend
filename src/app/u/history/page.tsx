import Image from "next/image";
function History() {
  return (
    <>
      <div className="flex flex-col bg-[#353966] h-full">
        <div className="flex flex-row gap-5 mx-8 m-4 text-stone-100 font-normal text-2xl">
          In Progress
        </div>
        <div className="flex flex-col bg-[#40477B] mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20)_inset,8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] ">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <div className="rounded-md">
                <Image
                  src="/images/Rectangle 22.png"
                  alt="logo"
                  className="self-center flex justify-center items-center py-1 px-1.5 rounded-[20px]"
                  width={250}
                  height={146}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 py-1.5">
              <div>
                <div className="text-2xl font-bold">Product Name</div>
                <div className="flex flex-row justify-start">
                  <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                    <Image
                      src="/images/icons/Light-bulb.svg"
                      alt="logo"
                      className="self-center flex justify-center items-center py-2 mt-1"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="pt-0.5 ml-1 px-1 text-lg font-medium">
                    Current bid is 200 bulbs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-end text-[#F5F1F073]">
              <div>10.09.2023</div>
              <div className="underline">Edit</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mx-8 m-2 mb-3 text-stone-100 font-normal text-2xl">
          Finished
        </div>
        <div className="flex flex-col gap-3">
        <div className="flex flex-col bg-[#40477B] mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20)_inset,8px_8px_20px_0px_rgba(126,130,176,0.25)_inset]">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <div className="rounded-md">
                <Image
                  src="/images/Rectangle 22.png"
                  alt="logo"
                  className="self-center flex justify-center items-center py-1 px-1.5 rounded-[20px]"
                  width={250}
                  height={146}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 py-1.5">
              <div>
                <div className="text-2xl font-bold">Product Name</div>
                <div className="flex flex-row justify-start">
                  <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                    <Image
                      src="/images/icons/Light-bulb.svg"
                      alt="logo"
                      className="self-center flex justify-center items-center py-2 mt-1"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="pt-0.5 ml-1 px-1 text-lg font-medium">
                    2000 bulbs
                  </div>
                </div>
              </div>
              <div className="flex flex-start mt-0.5 flex-col gap-2">
                <div className="flex items-end font-semibold">
                  review this product
                </div>
                <div>
                  <Image
                    src="/images/icons/review.svg"
                    alt="review icon"
                    width={29}
                    height={29}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-end text-[#F5F1F073]">
              <div>10.09.2023</div>
              <div className="">sell by user03</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#40477B] mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20)_inset,8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] ">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <div className="rounded-md">
                <Image
                  src="/images/Rectangle 22.png"
                  alt="logo"
                  className="self-center flex justify-center items-center py-1 px-1.5 rounded-[20px]"
                  width={250}
                  height={146}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 py-1.5">
              <div>
                <div className="text-2xl font-bold">Product Name</div>
                <div className="flex flex-row justify-start">
                  <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                    <Image
                      src="/images/icons/Light-bulb.svg"
                      alt="logo"
                      className="self-center flex justify-center items-center py-2 mt-1"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="pt-0.5 ml-1 px-1 text-lg font-medium">
                    2000 bulbs
                  </div>
                </div>
              </div>
              <div className="flex flex-start mt-0.5 flex-col gap-2">
                <div className="flex items-end font-semibold">
                  review this product
                </div>
                <div>
                  <Image
                    src="/images/icons/review.svg"
                    alt="review icon"
                    width={29}
                    height={29}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-end text-[#F5F1F073]">
              <div>10.09.2023</div>
              <div className="">sell by user03</div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}
export default History;
