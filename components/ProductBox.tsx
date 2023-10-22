import Image from "next/image";
export function ProductBox() {
  return <div className="max-md:max-w-full max-md:mt-10 mt-5">
              <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                  <div className="shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B] flex w-full grow flex-col flex-1 mx-[10px] lg:mx-[5px] 2xl:mx-[20px] pl-2.5 pr-2.5 py-3 rounded-3xl max-md:mt-10">
                    <div>
                      <Image alt="Sample img" className="aspect-auto object-cover object-center w-full overflow-hidden self-stretch rounded-xl" src="/images/Rectangle 31.png" width={204} height={118} />
                    </div>
                    <div className="text-stone-100 text-2xl font-extrabold mt-3">
                      <p>Product Name 1</p>
                    </div>
                    <div className="flex justify-end">
                      <div className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 flex w-[160px] max-w-full flex-col mt-4 px-1 py-2 rounded-[50px] justify-between">
                        <div className="text-stone-100 text-center text-xl font-semibold self-center">
                          view all
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
}
  