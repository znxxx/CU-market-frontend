"use client";
import Image from "next/image";
interface ExitButtonProps {
  width: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  height: number;
}
export default function ExitButton({
  onClick,
  width,
  height,
}: ExitButtonProps): JSX.Element {
  return (
    <div>
      <button onClick={onClick} className="flex self-center  w-[27px] h-[27px]">
        <Image
          src="/images/icons/close element.svg"
          alt="exit button"
          width={width}
          height={height}
          className="self-center"
        />
      </button>
    </div>
  );
}
