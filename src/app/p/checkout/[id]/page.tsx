"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Detail {
  id: number;
  studentId: string;
  paotungId: string;
  productName: string;
  description: string;
  startPrice: number;
  endPrice: number;
  createdAt: string;
  updatedAt: string;
  available: boolean;
  expiryTime: string;
  address: string;
  image: Image[];
  buyerId: string;
}
interface Image {
  url: string;
  key: string;
}

export default function BuyingConclusionPage({
  params,
}: {
  params: { id: string };
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alreadyPaid, setAlreadyPaid] = useState(false);
  const [error, setError] = useState(false);

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;
  const access_paotungToken = session?.user.paotungToken;
  const [lightbulb, setLightbulb] = useState<number | null>(null);
  const [receiverId, setReceiverId] = useState("");
  const [endPrice, setEndPrice] = useState(0);
  const [productDetail, setProductDetail] = useState<Detail | null>(null);

  useEffect(() => {
    async function getProductDetail() {
      if (status === "loading") return;
      const resProduct = await axios.get(
        `http://localhost:4000/product/details/${params.id}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      const productDetail = resProduct.data;
      setReceiverId(productDetail.user.paotungId);
      setEndPrice(productDetail.endPrice);
      setProductDetail(productDetail);
    }
    getProductDetail();
  }, [status]);

  async function handlePay(e) {
    e.preventDefault();

    // const getUser = await axios.get(`http://localhost:4000/users/info`,
    // {
    //   headers: { Authorization: `Bearer ${access_token}` },
    // })
    // const getInfo = getUser.data

    // await axios.post("https://paotooong.thinc.in.th/v1/auth/login", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: getInfo.email,
    //     password: ,
    //   }),
    // });

    const res = await axios.post(
      `https://paotooong.thinc.in.th/v1/wallet/pay/${receiverId}`,
      {
        id: receiverId, //input pleasepay id (see at paotung website please pay id เอามาจาก backend)
        amount: endPrice,
      },
      {
        headers: { Authorization: `Bearer ${access_paotungToken}` },
      }
    );

    if (res.status === 200) {
      setAlreadyPaid(true);
      return;
    } else {
      setError(true);
    }
  }

  return (
    <div className="bg-[#353966] h-full flex text-stone-100 p-10">
      <div className="basis-1/2 bg-[#40477B] rounded-3xl m-10 p-8 flex flex-col">
        <h1>Product Detail</h1>
        {productDetail === null ? (
          "loading"
        ) : (
          <>
            <h2>{productDetail.productName}</h2>
            <Image
              alt={
                productDetail.image.length > 0
                  ? productDetail?.image[0].key
                  : "Sample img"
              }
              className="basis-1/6 aspect-auto object-cover object-center rounded-2xl"
              src={
                productDetail.image.length > 0
                  ? productDetail?.image[0].url
                  : "/images/Rectangle 23.png"
              }
              width={220}
              height={180}
            />
          </>
        )}
      </div>
      <div className="basis-1/2 bg-[#40477B] rounded-3xl m-10 p-8 flex flex-col">
        <div>Pay with Paotung</div>
        <div>{`Paying to: ${receiverId}`}</div>
        <div>{`Price: ${endPrice}`}</div>
        <button onClick={(e) => handlePay(e)}>Pay</button>
      </div>
    </div>
  );
}
