"use client";
import { time } from "console";
import { now } from "next-auth/client/_utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductBoxProps {
  product: Product;
}
interface Product {
  id: number;
  studentId: string;
  productName: string;
  description: string;
  startPrice: number;
  createdAt: string;
  updatedAt: string;
  available: boolean;
  expiryTime: Date;
  address: string;
  image: string[];
  buyerId: any;
}

export function ProductBox({ product }: ProductBoxProps) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = new Date(product.expiryTime) - now;
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [now]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (timeLeft < 0) return null;

  return (
    <>
      {product.available && (
        <div className="relative">
          <div
            className="absolute bg-[#6A5AFA] text-stone-100 text-l font-medium flex justify-end px-4
       items-center w-[130px] h-[41px] rounded-full shadow-[8px_8px_12px_0px_rgba(0,0,0,0.40),8px_8px_20px_0px_rgba(0,0,0,0.30)_inset]"
          >
            {formatTime(timeLeft)}
          </div>
          <div className="bg-[#40477B] p-3 flex flex-col rounded-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
            <div className="w-full">
              <Image
                alt={
                  product.image.length > 0 ? product.image[0].key : "Sample img"
                }
                className="object-cover h-[120px] w-full overflow-hidden rounded-xl"
                src={
                  product.image.length > 0
                    ? product.image[0].url
                    : "/images/Rectangle 23.png"
                }
                width={204}
                height={118}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="mt-3 text-stone-100 text-2xl font-extrabold">
                {product.productName}
              </div>
              <div className="flex justify-start content-center">
                <span className="flex rounded-full bg-[#FF8BBC] w-[27px] h-[27px] items-center  justify-center shadow-black shadow-inner">
                  <Image
                    alt="Light Bulb"
                    className=""
                    src="/images/icons/Light-bulb.svg"
                    width={23}
                    height={23}
                  />
                </span>
                <div className="px-2 text-stone-100 text-m font-medium self-center">
                  {`start at ${product.startPrice} bulbs`}
                </div>
              </div>

              <div className="flex flex-row justify-end">
                <Link
                  href={`/u/productlist/${product.id}`}
                  className="flex justify-center items-center bg-[#40A9FD] w-[140px] h-[31px] rounded-[50px] text-[20px] text-slate-100 py-5 shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] font-semibold"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
