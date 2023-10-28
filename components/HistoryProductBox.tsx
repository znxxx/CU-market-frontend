import useCountdown from "@/hooks/useCountdown";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
  reviews: any;
}

export function HistoryProductBox({ product }: ProductBoxProps) {
  function StarRenderer() {
    const pictures: JSX.Element[] = [];
    if (product.reviews === undefined) return;

    for (let i = 0; i < Math.floor(product.reviews[0].star); i++) {
      pictures.push(
        <Image
          key={`Star: ${i}`}
          src={`/images/icons/Star.svg`}
          alt={`Star ${i + 1}`}
          width={29}
          height={29}
        />
      );
    }
    for (let i = 0; i < 5 - Math.floor(product.reviews[0].star); i++) {
      pictures.push(
        <Image
          key={`Whitestar: ${i}`}
          src={`/images/icons/whiteStar.svg`}
          alt={`Star ${i + 1}`}
          width={29}
          height={29}
        />
      );
    }

    return pictures;
  }
  function DateFormat() {
    console.log(product);
    const inputDateStr = product.createdAt;
    const inputDate = new Date(inputDateStr);

    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const year = inputDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
  }

  const { secondsLeft, start } = useCountdown();

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;
  const access_studentId = session?.user.studentId;

  function setStart() {
    const now = new Date();
    const deletePeriod = 60;
    const rawTimeDifference = now - new Date(product.createdAt);
    const timeDifference = Math.floor(rawTimeDifference / 1000);

    if (timeDifference > deletePeriod) return;
    start(deletePeriod - timeDifference);
  }
  useEffect(() => {
    setStart();
  }, [status]);

  async function handleDelete(id) {
    try {
      const res = await axios.delete(
        `http://localhost:4000/product/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
    } catch (err) {}
  }

  return (
    <>
      {access_studentId === product.studentId ? (
        <div className="p-3 flex gap-6 bg-[#40477B] h-40 rounded-xl mx-6 text-stone-100 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset]">
          <Image
            alt={product.image.length > 0 ? product.image[0].key : "Sample img"}
            className="basis-1/6 aspect-auto object-cover object-center rounded-2xl"
            src={
              product.image.length > 0
                ? product.image[0].url
                : "/images/Rectangle 23.png"
            }
            width={220}
            height={180}
          />
          <div className="basis-2/6 flex flex-col justify-between text-2xl font-bold">
            <div>
              {product.productName}
              <div className="text-base font-normal flex justify-start">
                <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                  <Image
                    src="/images/icons/Light-bulb.svg"
                    alt="logo"
                    className="self-center flex justify-center items-center py-2 mt-1"
                    width={23}
                    height={23}
                  />
                </div>
                <div className="pt-0.5 ml-1 px-1 text-base font-normal ">
                  {product.available ? "still in bidding" : product.startPrice}
                </div>
              </div>
            </div>

            {product.reviews !== undefined ? (
              <div className="text-sm font-medium">
                score
                <div className="flex ">{StarRenderer()}</div>
              </div>
            ) : null}
          </div>
          <div className="basis-1/6 flex flex-col flex-1 justify-between text-end text-[#F5F1F073]">
            <div>
              <div>{DateFormat()}</div>
              {product.buyerId !== null && (
                <div>{`bid by ${product.buyerId}`}</div>
              )}
            </div>
            {secondsLeft > 0 && product.available ? (
              <button
                className="bg-[#FF8BBC] py-1 px-4 rounded-full
            box-border text-slate-50 place-self-end font-medium text-xl shadow-[6px_10px_30px_0px_rgba(0,0,0,0.2)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset]"
                onClick={() => handleDelete(product.id)}
              >
                {`delete ${secondsLeft}`}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
