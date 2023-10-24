import Image from "next/image";
function History() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row gap-5 justify-center m-3 h-[47px]">
          <div className="bg-[#40A9FD] w-[197px] rounded-[50px] text-center py-3">
            BID
          </div>
          <div className="bg-[#FF8BBC] w-[197px] rounded-[50px] text-center py-3">
            SELL
          </div>
        </div>
        <div className="flex grow flex-col bg-[#40477B] mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3">
          <div className="flex flex-row gap-4">
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
            <div className="flex flex-col gap-5">
              <div>
                <div className="text-xl font-bold">Product Name</div>
                <div className="flex flex-row justify-start">
                  <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                    <Image
                      src="/images/icons/Light-bulb.svg"
                      alt="logo"
                      className="self-center flex justify-center items-center py-2"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="py-2 px-1 text-md">
                    2,000 bulbs
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-md font-medium flex flex-col justify-end">Rate this product</div>
                <div className="flex flex-row">
                  <div>Star</div>
                  <div>Review Icon</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 text-end">history</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default History;
