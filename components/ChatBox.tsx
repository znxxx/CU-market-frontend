"use client";
import Image from "next/image";
import ExitButton from "./ExitButton";
interface Chat {
  isYours: boolean;
  message: string;
  time: string;
}
interface ChatBoxProps {
  chatbox: Chat[];
  seller: string;
}

export default function ChatBox({
  chatbox,
  seller,
}: ChatBoxProps): JSX.Element {
  const handleSubmitClick = () => {
    console.log("clicked");
  };

  return (
    <div className="w-[392px] h-[692px] flex flex-col justify-between items-center mx-4 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B]">
      <div className="w-[392px] h-[33px] pl-[20px] pr-[3px] bg-gradient-to-b from-pink-400 to-indigo-500 text-xl font-semibold flex justify-between items-center">
        {seller}
        <ExitButton onClick={handleSubmitClick} width={21} height={21} />
      </div>
      <div className="flex flex-col w-[350px]">
        {chatbox.map((chat, index) => (
          <div
            key={index}
            className={`
      flex flex-row my-[8px]
      ${chat.isYours ? "justify-end" : "justify-start"}
    `}
          >
            {chat.isYours ? (
              <>
                <p className="text-opacity-40 text-[13px] font-small flex items-end">
                  {chat.time}
                </p>
                <div className="max-w-[75%] flex text-stone-100 text-base font-medium ml-[8px] bg-indigo-500 rounded-[20px] p-[16px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
                  {chat.message}
                </div>
              </>
            ) : (
              <>
                <div className="flex text-stone-100 text-base font-medium mr-[8px] bg-[#FF8BBC] rounded-[20px] p-[16px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
                  {chat.message}
                </div>
                <p className="text-opacity-40 text-[13px] font-small flex items-end">
                  {chat.time}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <form className="w-[350px] h-[40px] m-[20px] bg-indigo-500 rounded-[20px] flex flex-row justify-between items-center shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
        <input className="w-[300px] h-[30px] outline-none bg-indigo-500 p-[16px] m-[10px]" />
        <button
          type="submit"
          className="flex self-center w-[27px] h-[27px] mr-[15px]"
        >
          <Image
            src="/images/icons/sending element.svg"
            alt="exit button"
            className="self-center"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
}
