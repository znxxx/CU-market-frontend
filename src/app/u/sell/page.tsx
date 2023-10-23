import Navbar from "../../../../components/Navbar";
import Image from "next/image";
import DatePicker from "../../../../components/date";
function sellItem() {
  return (
    <main className="bg-[#353966] flex flex-col">
      <header className="borde self-stretch flex w-full flex-col pt-4 border-solid border-black max-md:max-w-full">
        <Navbar />
      </header>
      <section className="self-center w-full max-w-[1336px] mt-10 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-1.5 max-md:max-w-full max-md:mt-10">
              <div className="shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)] bg-[#40477B] flex w-[703px] max-w-full flex-col pt-48 pb-48 rounded-3xl">
                <div className="self-center flex flex-col" />
                <div className="text-stone-100 text-xl font-medium self-center justify-center max-md:mb-2.5 items-center">
                  <div className="">
                    <Image
                      src="/images/icons/upload.svg"
                      alt="upload"
                      height={54}
                      width={54}
                    />
                  </div>
                </div>
                <div className="text-stone-100 text-xl text-center font-medium mt-2">
                  Upload Picture
                </div>
              </div>
              <div className="mt-3">
                <div className="text-stone-300 text-xl font-medium mt-1">
                  2 files have been uploaded
                </div>
                <div className="mt-4">
                  <div className="text-stone-300 text-xl font-medium underline">
                    oat.JPG1
                  </div>
                  <div className="text-stone-300 text-xl font-medium underline">
                    guy.JPG2
                  </div>
                  <div className="text-stone-300 text-xl font-medium underline">
                    Mash.JPG3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col max-md:max-w-full max-md:mt-9">
              <div className="text-stone-100 text-xl font-medium ml-7 max-md:ml-2.5">
                Product Name
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] w-[597px] max-w-full mt-2.5 pt-6 pb-5 rounded-[50px] max-md:pl-2 flex">
                <input
                  type="text"
                  id="product-name"
                  className="focus:outline-none bg-[#40477B] grow px-5 rounded-xl"
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-3 max-md:ml-2.5">
                Description
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] max-w-full mt-1.5 pt-6 pb-5 px-5 rounded-[50px] max-md:pl-2">
                <textarea
                  id="description"
                  className="bg-[#40477B] flex grow flex-1 mx-2 rounded-xl focus:outline-none"
                  rows={2}
                  cols={48}
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-3 max-md:ml-2.5">
                Your bid starts at
              </div>
              <div className="flex max-w-full items-start gap-5 mt-1 max-md:ml-px">
                <div className="rounded-full bg-[#FF8BBC] w-[70px] h-[70px] flex items-center flex-col justify-center shadow-black shadow-inner my-2.5">
                  <Image
                    src="/images/icons/Light-bulb.svg"
                    alt="logo"
                    className="self-center"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="bg-[#40477B] mt-3 max-md:pl-2 w-32 flex flex-col py-2 rounded-[50px] text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)]">
                  <input
                    type="text"
                    id="product-name"
                    className="focus:outline-none text-3xl flex-grow min-h-[50px] bg-[#40477B] rounded-[50px] text-stone-100 text-center px-2"
                  />
                </div>
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-1 max-md:ml-2.5">
                Expiration date
              </div>
              <div className="bg-[#40477B] rounded-[50px] h-12 w-52 mx-3 mt-2.5 flex flex-col justify-center shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)] py-8">
                <div className="flex flex-row items-center">
                  <DatePicker />
                  {
                    <Image
                      src="/images/icons/calendar.svg"
                      alt="calendar-icon"
                      className="self-center mr-3"
                      width={34}
                      height={34}
                    />
                  }
                </div>
              </div>
              <div className="flex h-9 flex-col flex-1" />

              <div className="text-stone-100 text-xl font-medium ml-7 mt-4 max-md:ml-2.5 mb-2">
                Expiration time
              </div>
              <div className="flex max-w-full items-start gap-3 ml-5 max-md:justify-center">
                <input type="number" className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-[50px] text-2xl shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)]" />
                <div className="text-neutral-300 text-xl font-medium self-center my-auto">
                  :
                </div>
                <input type="number" className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-[50px] text-2xl shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)]" />


                {/* <div className="text-neutral-300 text-xl font-medium self-center my-auto">
                  :
                </div>
                <input type="number" className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-lg text-2xl" /> */}

              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-center flex w-[414px] max-w-full items-start justify-between gap-5 mr-8 mt-28 mb-8 pr-5 max-md:flex-wrap max-md:justify-center max-md:mr-2.5 max-md:mt-10">
        <button className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 self-center flex w-[178px] max-w-full flex-col m-auto px-5 py-3 rounded-[50px]">
          <span className="text-stone-100 text-center text-3xl font-semibold self-center">
            Submit
          </span>
        </button>
      </footer>
    </main>
  );
}

export default sellItem;
