/* eslint-disable react/jsx-key */
"use client";
import Review from "../../../../../components/review";
import EditReview from "../../../../../components/reviewed";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BlockUI from "../../../../../components/block";
import Loading from "../../../../../components/loading";
import { useSession } from "next-auth/react";



function History() {
  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;
  
  



  
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showEditReview, setShowEditReview] = useState(false)
  const [selectedProductReviews, setSelectedProductReviews] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:4000/users/history`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => setProduct(response))
      .catch((err) => {
        console.error("err", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  // console.log(product[0]);
  

  const [reviewStatus, setReviewStatus] = useState(true);
  const handleEditReview = (reviews) => {
    setSelectedProductReviews(reviews);
    setShowEditReview(true);
  }
  const handleReview = (reviews) => {
    setSelectedData(reviews);
    setShowReview(true);
  }
  return (
    <>
      <div className="bg-[#353966]">
        {isLoading && (
          <>
            {/* <BlockUI block={true} /> */}
            <Loading />
          </>
        )}
      </div>

      {!isLoading && (
        <div className="flex flex-col bg-[#353966] h-full">
          <Review showReview={showReview} setShowReview={setShowReview} reviewData={selectedData} />
          <EditReview showEditReview={showEditReview} setShowEditReview={setShowEditReview} reviewData={selectedProductReviews} />
          <div className="flex flex-row gap-5 mx-8 m-5 text-stone-100 font-normal text-2xl">
            In Progress
          </div>
          {product
            .filter((p) => p.available)
            .map((p) => (
              <div className="flex flex-col mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B]">
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col">
                    <div className="rounded-md">
                      <Image
                        src="/images/Rectangle 22.png"
                        alt="logo"
                        className="self-center flex justify-center items-center py-1 px-1.5 rounded-[20px]"
                        width={250}
                        height={146}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 py-1.5">
                    <div>
                      <div className="text-2xl font-bold">{p.productName}</div>
                      <div className="flex flex-row justify-start">
                        <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                          <Image
                            src="/images/icons/Light-bulb.svg"
                            alt="logo"
                            className="self-center flex justify-center items-center py-2 mt-1"
                            width={23}
                            height={23}
                          />
                        </div>
                        <div className="pt-0.5 ml-1 px-1 text-lg font-medium">
                          {p.endPrice}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-start mt-0.5 flex-col gap-2"></div>
                  </div>
                  <div className="flex flex-col flex-1 text-end text-[#F5F1F073] mx-2">
                    {new Date(p.expiryTime).toLocaleDateString()}
                    <div className="">sell by user:{p.studentId}</div>
                    <div
                      className={`-mx-2 mt-auto ml-auto ${
                        p.reviews.length > 0 ? "bg-[#40477B]" : "bg-[#40A9FD]"
                      } w-[197px] h-[47px] text-center text-stone-100 p-[5px] text-[25px] font-bold rounded-[50px] shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42),3px_4px_7px_0px_rgba(0,0,0,0.20)_inset]`}
                    >
                      {p.reviews.length > 0 ? <p>Reviewed</p> : <p>Review</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className="flex flex-row gap-5 mx-8 m-2 mb-3 text-stone-100 font-normal text-2xl">
            Finished
          </div>
          <div className="flex flex-col gap-3">
            {product
              .filter((p) => !p.available)
              .map((p) => (
                <div className="flex flex-col mx-4 rounded-[20px] py-3 px-2 text-stone-100 mb-3 shadow-[8px_8px_12px_0px_rgba(0,0,0,0.20),8px_8px_20px_0px_rgba(126,130,176,0.50)_inset] bg-[#40477B]">
                  <div className="flex flex-row gap-6">
                    <div className="flex flex-col">
                      <div className="rounded-md">
                        <Image
                          src={p.image[0].url}
                          alt="logo"
                          className="self-center flex justify-center items-center py-1 px-1.5 rounded-[20px] overflow-hidden w-[250px] h-[146px] object-cover"
                          width={250}
                          height={146}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 py-1.5">
                      <div>
                        <div className="text-2xl font-bold">
                          {p.productName}
                        </div>
                        <div className="flex flex-row justify-start">
                          <div className="rounded-full bg-[#FF8BBC] w-[29px] h-[29px] flex items justify-center shadow-black shadow-inner py-2">
                            <Image
                              src="/images/icons/Light-bulb.svg"
                              alt="logo"
                              className="self-center flex justify-center items-center py-2 mt-1"
                              width={23}
                              height={23}
                            />
                          </div>
                          <div className="pt-0.5 ml-1 px-1 text-lg font-medium">
                            {p.endPrice}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-start mt-0.5 flex-col gap-2"></div>
                    </div>
                    <div className="flex flex-col flex-1 text-end text-[#F5F1F073] mx-2">
                      {new Date(p.expiryTime).toLocaleDateString()}
                      <div className="">sell by user:{p.studentId}</div>
                      <button
                        className="-mx-2 mt-auto ml-auto"
                        onClick={() => {
                          if (p.reviews.length > 0) {
                            handleEditReview(p.reviews)
                          } else {
                            handleReview(p)
                          }
                        }}
                      >
                        <div
                          className={`-mx-2 mt-auto ml-auto ${
                            p.reviews.length > 0
                              ? "bg-[#40477B]"
                              : "bg-[#40A9FD]"
                          } w-[197px] h-[47px] text-center text-stone-100 p-[5px] text-[25px] font-bold rounded-[50px] shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42),3px_4px_7px_0px_rgba(0,0,0,0.20)_inset]`}
                        >
                          {p.reviews.length > 0 ? (
                            <p>Reviewed</p>
                          ) : (
                            <p>Review</p>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
export default History;