import Image from "next/image";
import ExitButton from "./ExitButton";
interface ChatBoxProps {
  seller: string;
}

export default function ChatBox({ seller }: ChatBoxProps): JSX.Element {
  const handleSubmitClick = () => {
    console.log("clicked");
  };
  return (
    <div className="w-[392px] h-[512px] flex flex-col justify-between items-center mx-4 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B]">
      <div className="w-[392px] h-[33px] pl-[20px] pr-[3px] bg-gradient-to-b from-pink-400 to-indigo-500 text-xl font-semibold flex justify-between items-center">
        {seller}
        <ExitButton onClick={handleSubmitClick} width={21} height={21} />
      </div>
      <div className="flex flex-row">
        <label className="flex flex-col bg-indigo-500 rounded-[20px] shadow shadow-inner text-stone-100 text-base font-medium p-[16px]">
          hello
        </label>
        <label className="flex flex-col bg-indigo-500 rounded-[20px] shadow shadow-inner text-stone-100 text-base font-medium p-[16px]">
          hello
        </label>
      </div>
      <form className="w-[297px] h-[35px] m-[20px] bg-indigo-500 rounded-[20px] shadow shadow-inner flex flex-row justify-between items-center">
        <input className="w-[285px] h-[30px] outline-none bg-indigo-500 p-[16px] m-[10px]" />
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
