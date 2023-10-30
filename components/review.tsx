"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Review = ({ showReview, setShowReview, reviewData }) => {
  const [rating, setRating] = useState(0);
  const [data, setData] = useState({});
  const [description, setDescription] = useState("");

  // Set productId and reviewerId once when reviewData changes
  useEffect(() => {
    if (reviewData) {
      const productId = reviewData.id;
      const reviewerId = reviewData.studentId;
      setData({
        productId,
        reviewerId,
        star: rating,
        reviewDescription: description,
      });
    }
  }, [reviewData, rating]);

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    if (id === "reviewDescription") {
      setDescription(value);
    }
  };

  const handleSubmit = () => {
    const updatedData = {
      productId: reviewData?.id,
      reviewerId: reviewData?.studentId,
      star: rating,
      reviewDescription: description,
    };
    // console.log(updatedData);
    fetch("http://localhost:4000/review/add/", {
      method: "POST",
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
        setShowReview(false);
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
          title: "Review successful",
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
    // .finally(() => {
    //   // setIsLoading(false);
    // });
  };

  // console.log(data);

  return showReview ? (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[0] w-full h-full bg-[rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-center pointer-events-auto">
      <div className="flex flex-col p-5 items-center">
        <div className="flex flex-row bg-red-500 grow w-[329px] h-[33px] bg-gradient-to-b from-[#FF8BBC] to-[#6A5AFA] justify-end">
          <button onClick={() => setShowReview(false)}>
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
                    rating === key + 1 ? setRating(0) : setRating(key + 1);
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
                placeholder="Type here"
                id="reviewDescription"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </div>
            <div className="bg-[#6A5AFA] rounded-[50px] w-[86px] h-[21px] text-center text-stone-100 font-[12px] ml-auto mt-auto">
              <button onClick={handleSubmit}>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Review;
