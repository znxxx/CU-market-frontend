"use client";
import Image from "next/image";
import ExitButton from "./ExitButton";
interface chatinfo {
  seller: string;
  message: string;
  time: string;
}
interface ChatOverviewBoxProps {
  chatinfos: chatinfo[];
}

export default function ChatOverviewBox({
  chatinfos,
}: ChatOverviewBoxProps): JSX.Element {
  const handleSubmitClick = () => {
    console.log("clicked");
  };
  return (
    <div className="w-[392px] h-[512px] flex flex-col justify-start items-center mx-4 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B] overflow-y-auto">
      <div className="w-[392px] h-[33px] pl-[20px] pr-[3px] bg-gradient-to-b from-pink-400 to-indigo-500 text-xl font-semibold flex justify-end items-center">
        <ExitButton onClick={handleSubmitClick} width={21} height={21} />
      </div>
      {chatinfos.map((item, index) => (
        <div
          key={index}
          className="mt-[20px] w-[350px] h-[77px] bg-[#6A5AFA] rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] items-center flex flex-row justify-between"
        >
          <div className="relative ml-[18px] w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/images/Rectangle 31.png"
              alt="Seller Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="items-start flex flex-col justify-center ml-[18px]">
            <p className="text-center text-stone-100 text-xl font-semibold shadow shadow-inner">
              {item.seller}
            </p>
            <p className="text-stone-100 text-base font-medium shadow shadow-inner mr-[150px]">
              {item.message}
            </p>
          </div>
          <p className="text-stone-100 text-opacity-40 text-base font-medium flex mr-[40px] flex-row justify-end items-end">
            {item.time}
          </p>
        </div>
      ))}
    </div>
  );
}
