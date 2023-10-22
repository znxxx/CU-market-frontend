import Image from "next/image";
import Navbar from "../../components/Navbar";
function Home(props: any) {
  return (
    <main className="bg-slate-700">
      <header className="bg-slate-600 self-stretch flex w-full flex-col pb-2 max-md:max-w-full">
        <Navbar/>
      </header>
      <section className="flex-col overflow-hidden self-stretch relative z-[1] flex min-h-[458px] w-full -mt-2 pt-96 pb-5 px-5 max-md:max-w-full">
        {/* <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f319acb9-f05d-4864-b6f2-4a23daafe69a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          alt="Background Image"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf203d6-e2f8-4ce2-a642-f2068788d99c?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
          className="aspect-[5.5] object-cover object-center w-[66px] overflow-hidden self-center max-w-full ml-7"
          alt="Logo"
        /> */}
      </section>
      <section className="self-center flex w-full max-w-[1173px] items-start justify-between gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-indigo-500 self-stretch flex flex-col px-5 py-2 rounded-3xl max-md:max-w-full">
          <div className="items-start self-center flex w-[243px] max-w-full gap-px">
            <div className="text-stone-100 text-center text-3xl font-bold my-auto">
              TODAY’S PICKS
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/928f69f2-2b6d-4a09-b474-bf10dc0d8863?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
              className="aspect-square object-cover object-center w-[39px] fill-yellow-300 shadow-md overflow-hidden self-stretch max-w-full"
              alt="Today's Picks"
            />
          </div>
        </div>
        <div className="shadow-[8px_8px_12px_0px_rgba(32,41,143,0.25),8px_8px_20px_0px_rgba(32,41,143,0.25)_inset] bg-indigo-500 self-stretch flex flex-col px-5 py-3 rounded-3xl max-md:max-w-full">
          <div className="self-center flex w-72 max-w-full items-start gap-1.5 ml-3.5">
            <div className="text-stone-100 text-center text-3xl font-bold max-w-[272px] self-center grow shrink-0 basis-auto my-auto">
              LAST MINUTE BIDS
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e4959fa-bac8-431f-9c27-8ba173438c81?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
              className="aspect-square object-cover object-center w-[33px] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden self-stretch max-w-full"
              alt="Last Minute Bids"
            />
          </div>
        </div>
      </section>
      <section className="self-center w-full max-w-[1377px] mt-8 mb-8 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] bg-slate-600 flex w-full grow flex-col flex-1 mx-auto pl-2.5 pr-2.5 py-3 rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd1b3a-3bf0-4e2f-b15a-f368663cbad8?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
                      className="aspect-[1.73] object-cover object-center w-full overflow-hidden self-stretch"
                      alt="Product Image"
                    />
                    <div className="text-stone-100 text-2xl font-extrabold mt-3">
                      Product Name
                    </div>
                    <a
                      href="#"
                      className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 flex w-[130px] max-w-full flex-col mt-6 px-5 py-2.5 rounded-[50px]"
                    >
                      <div className="text-stone-100 text-center text-xl font-semibold self-center">
                        view all
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] bg-slate-600 flex w-full grow flex-col flex-1 mx-auto pl-2.5 pr-2.5 py-3 rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bb9b0d-a5c9-43f2-b080-ac2ce0cd255a?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
                      className="aspect-[1.73] object-cover object-center w-full overflow-hidden self-stretch"
                      alt="Product Image"
                    />
                    <div className="text-stone-100 text-2xl font-extrabold mt-3">
                      Product Name
                    </div>
                    <a
                      href="#"
                      className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 flex w-[130px] max-w-full flex-col mt-6 px-5 py-2.5 rounded-[50px]"
                    >
                      <div className="text-stone-100 text-center text-xl font-semibold self-center">
                        view all
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] bg-slate-600 flex w-full grow flex-col flex-1 mx-auto pl-2.5 pr-2.5 py-3 rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa6ae90c-3105-43bc-a7dc-36ac52e74f4e?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
                      className="aspect-[1.73] object-cover object-center w-full overflow-hidden self-stretch"
                      alt="Product Image"
                    />
                    <div className="text-stone-100 text-2xl font-extrabold mt-3">
                      Product Name
                    </div>
                    <a
                      href="#"
                      className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 flex w-[130px] max-w-full flex-col mt-6 px-5 py-2.5 rounded-[50px]"
                    >
                      <div className="text-stone-100 text-center text-xl font-semibold self-center">
                        view all
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] bg-slate-600 flex w-full grow flex-col flex-1 mx-auto pl-3.5 pr-1.5 py-3 rounded-3xl max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b22f2136-6dc6-4341-aec2-ed967984f37f?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
                      className="aspect-[1.73] object-cover object-center w-full overflow-hidden self-stretch"
                      alt="Product Image"
                    />
                    <div className="text-stone-100 text-2xl font-extrabold mt-3">
                      Product Name
                    </div>
                    <a
                      href="#"
                      className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 flex w-[130px] max-w-full flex-col mt-6 px-5 py-2.5 rounded-[50px]"
                    >
                      <div className="text-stone-100 text-center text-xl font-semibold self-center">
                        view all
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a12db4b4-7e83-41ad-b26f-52e8aa26d0e4?apiKey=b1e05fed956845de99e3bd40ee71c9d0&"
                    className="aspect-[1.04] object-cover object-center w-full shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.25)_inset] overflow-hidden grow max-md:mt-10"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
