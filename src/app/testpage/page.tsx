"use client";
import Image from "next/image";
import { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState(false);
  console.log(rating);

  return (
    <>
      <div className="flex flex-col p-5">
        <div className="flex flex-row bg-red-500 grow w-[329px] h-[33px] bg-gradient-to-b from-[#FF8BBC] to-[#6A5AFA] justify-end mb-3">
          <Image
            src="/images/icons/x-mark.svg"
            alt="x-mark"
            className="mr-1.5"
            width={21}
            height={21}
          />
        </div>
        <div className="h-[286px] bg-[#40477B] w-[329px] flex flex-col gap-5">
          <div className="flex flex-row gap-3">
            {[...Array(5)].map((value, key) => (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={key + 1}
                  className="hidden"
                  onClick={() => {
                    rating === key+1 ? setRating(0): setRating(key + 1);
                  }}
                />
                <Image
                  src={`/images/icons/${
                    key+1 <= rating ? "Yellow Star.svg" : "White Star.svg"
                  }`}
                  alt="White-star"
                  className="flex items-center cursor-pointer"
                  width={40}
                  height={40}
                />
              </label>
            ))}
          </div>
          <div className="bg-white w-[272px] h-[162px] rounded-[20px] p-5 flex mx-auto">
            Type something
            <div className="bg-[#6A5AFA] rounded-[50px] w-[86px] h-[21px] text-center text-stone-100 font-[12px] ml-auto mt-auto">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
