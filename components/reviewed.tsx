"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const EditReview = ({
  showEditReview,
  setShowEditReview,
  reviewData,
}) => {
  const router = useRouter();

  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (reviewData && reviewData[0]?.star) {
      setRating(reviewData[0].star);
    }
  }, [reviewData]);

  //   showEditReview = true;
  const defaultdata = {
    id: reviewData[0]?.id,
    star: reviewData[0]?.star,
    reviewDescription: reviewData[0]?.reviewDescription,
  };

  const [data, setData] = useState(defaultdata);

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    let { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    const updatedData = {
      ...data,
      star: rating, // Set the star property to the current rating
    };

    updatedData.id = reviewData[0]?.id;
    fetch("http://localhost:4000/review/edit/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInN0dWRlbnRJZCI6IjEyMzYiLCJpYXQiOjE2OTg0MzMyMjMsImV4cCI6MTcwNjIwOTIyM30.fNslsutsLtg1PAoQ_u6aUlRkVFgPv84XgsN8edWDCZM`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error("err", err);
      })
      .then(() => {
        setShowEditReview(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Edit successful",
          background: "#40477B",
          color: "#F5F1F0",
          iconColor: "#FF8BBC",
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  return showEditReview ? (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[0] w-full h-full bg-[rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-center pointer-events-auto">
      <div className="flex flex-col p-5 items-center">
        <div className="flex flex-row bg-red-500 grow w-[329px] h-[33px] bg-gradient-to-b from-[#FF8BBC] to-[#6A5AFA] justify-end">
          <button onClick={() => setShowEditReview(false)}>
            <Image
              src="/images/icons/x-mark.svg"
              alt="x-mark"
              className="mr-1.5"
              width={21}
              height={21}
            />
          </button>
        </div>
        <div className="h-[286px] bg-[#40477B] w-[329px] flex flex-col gap-6">
          <div className="flex flex-row gap-3 mt-3 ml-6">
            {[...Array(5)].map((value, key) => (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={key + 1}
                  className="hidden"
                  onClick={() => {
                    const newRating = key + 1;
                    setRating(newRating);
                    setData({
                      ...data,
                      star: newRating,
                    });
                  }}
                />
                <Image
                  src={`/images/icons/${
                    key + 1 <= rating ? "Yellow Star.svg" : "White Star.svg"
                  }`}
                  alt="White-star"
                  className="flex items-center cursor-pointer"
                  width={40}
                  height={40}
                />
              </label>
            ))}
          </div>
          <div className="bg-white w-[272px] h-[162px] rounded-[20px] p-5 flex mx-auto flex-col">
            <div>
              <textarea
                className="focus:outline-none"
                rows={5}
                cols={27}
                defaultValue={reviewData[0]?.reviewDescription}
                id="reviewDescription"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </div>
            <div className="flex flex-row">
              <div className="bg-[#FF8BBC] rounded-[50px] w-[86px] h-[21px] text-center text-stone-100 font-[12px] ml-auto mt-auto">
                <button>Clear</button>
              </div>
              <div className="bg-[#6A5AFA] rounded-[50px] w-[86px] h-[21px] text-center text-stone-100 font-[12px] ml-auto mt-auto">
                <button onClick={handleSubmit}>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default EditReview;
