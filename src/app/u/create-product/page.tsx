"use client";
import Navbar from "../../../../components/Navbar";
import Image from "next/image";
import DatePicker from "../../../../components/date";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BlockUI from "../../../../components/block";
import Swal from "sweetalert2";
import io from "socket.io-client";

// import { useSession } from "next-auth/react";
// import { getToken } from "next-auth/jwt";

function sellItem() {
  const [block, setBlock] = useState(false);
  const [socket, setSocket] = useState(null);
  // const { data: session, status } = useSession();
  // const access_token = session?.user.access_token;
  // console.log(session);

  const date = new Date();
  const [startDate, setStartDate] = useState(null);

  const router = useRouter();
  const linkPage = (page: string) => {
    router.push(page);
  };

  const currentTime = {
    hr: date.getHours(),
    min: date.getMinutes(),
  };

  const defaultdata = {
    studentId: "1236",
    productName: "",
    description: "",
    quantity: 0,
    startPrice: 1000,
    endPrice: 0,
    available: true,
    expiryTime: startDate,
    address: "",
    image: null,
  };
  const [meta, setMeta] = useState(defaultdata);
  const [preImg, setPreImg] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const updatedPreImg = [...preImg];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      const key = i;
      updatedPreImg.push({ file, name: file.name, key: key });
      setPreImg(updatedPreImg);
      reader.readAsDataURL(file);
      console.log(updatedPreImg);
    }
  };

  useEffect(() => {
    // Establish the socket connection when the component is mounted
    const newSocket = io("http://localhost:4000/auction");
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    let { id, value } = e.target;
    if (id === "startPrice" || id === "quantity") {
      value = Number(value);
    }
    setMeta({
      ...meta,
      [id]: value,
    });
  };

  const [time, setTime] = useState({
    hr: currentTime.hr,
    min: currentTime.min,
  });
  const handleTime = (e) => {
    const { id, value } = e.target;
    setTime({
      ...time,
      [id]: Number(value),
    });
  };

  useEffect(() => {
    const updatedDate = startDate || new Date();
    updatedDate.setHours(time.hr);
    updatedDate.setMinutes(time.min);

    setMeta({
      ...meta,
      expiryTime: updatedDate.toISOString(),
    });
  }, [startDate, time]);

  async function handleSubmit() {
    const imageMetaData: { imageUrl: any; imageKey: any }[] = [];
    await Swal.fire({
      title: "Confirm?",
      text: "Please carefully check your product details. After you confirm this, you will have 60 seconds to delete.",
      color: "#F5F1F0",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      background: "#40477B",
      customClass: {
        confirmButton: "popup-btn-yes",
        color: "#F5F1F0",
        text: "popup-title",
        title: "popup-title",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setBlock(true);
          for (const image of preImg) {
            const formData = new FormData();
            formData.append("file", image.file);
            const res = await fetch("http://localhost:4000/aws/upload-image", {
              method: "POST",
              headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInN0dWRlbnRJZCI6IjEyMzYiLCJpYXQiOjE2OTg0MzMyMjMsImV4cCI6MTcwNjIwOTIyM30.fNslsutsLtg1PAoQ_u6aUlRkVFgPv84XgsN8edWDCZM`,
              },
              body: formData,
            });
            if (res.ok) {
              const responseJson = await res.json();
              const url = responseJson.url;
              const key = responseJson.key;
              imageMetaData.push({
                url,
                key,
              });
            } else {
              console.error("Image upload failed");
            }
          }

          const updatedMeta = {
            ...meta,
            image: imageMetaData,
          };
          console.log(JSON.stringify(updatedMeta));

          const response = await fetch("http://localhost:4000/product/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${access_token}`,
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInN0dWRlbnRJZCI6IjEyMzYiLCJpYXQiOjE2OTg0MzMyMjMsImV4cCI6MTcwNjIwOTIyM30.fNslsutsLtg1PAoQ_u6aUlRkVFgPv84XgsN8edWDCZM`,
            },
            body: JSON.stringify(updatedMeta),
          });
          if (response.ok) {
            // console.log(response);
            const data = await response.json();
            console.log(data.id);
            
            if (socket) {
              socket.emit("newProduct", {
                room: `bid-${data.id}`,
                sellerStudentId: data.studentId,
                startPrice: data.startPrice,
                currentBidder: "",
                currentPrice: data.startPrice,
                bidHistory: [],
              });
            }
            // const socket = io("http://localhost:4000/auction");
           
            // console.log("After socket emit");
            setBlock(false);
            await Swal.fire({
              title: "Create Complete",
              icon: "success",
              background: "#40477B",
              color: "#F5F1F0",
              iconColor: "#FF8BBC",
              showConfirmButton: false,
              timer: 5000,
            });
            linkPage("/u/history/sell");
            // console.log(response.json());
          } else {
            await Swal.fire({
              title: "Create Failed, please try again",
              icon: "error",
              background: "#40477B",
              color: "#F5F1F0",
              iconColor: "#FF8BBC",
              showConfirmButton: false,
              timer: 5000,
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  // useEffect(() => {
  //   console.log(meta);
  // }, [meta]);

  return (
    <main className="bg-[#353966] flex flex-col">
      <header className="borde self-stretch flex w-full flex-col pt-4 border-solid border-black max-md:max-w-full"></header>
      <section className="self-center w-full max-w-[1336px] mt-10 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 2xl:gap-7">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-1.5 max-md:max-w-full max-md:mt-10">
              <div className="relative">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => handleImageUpload(e)}
                  />
                  <div className="shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)] bg-[#40477B] flex w-[703px] max-w-full flex-col pt-48 pb-48 rounded-3xl">
                    <div className="self-center flex flex-col" />
                    <div className="text-stone-100 text-xl font-medium self-center justify-center max-md:mb-2.5 items-center">
                      <div className="">
                        <Image
                          src="/images/icons/upload.svg"
                          alt="upload"
                          height={54}
                          width={54}
                        />
                      </div>
                    </div>
                    <div className="text-stone-100 text-xl text-center font-medium mt-2">
                      Upload Picture
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-3">
                <div
                  className={`text-stone-300 text-xl font-medium mt-1 ${
                    preImg.length > 0 ? "" : "hidden"
                  }`}
                >
                  {preImg.length} files have been uploaded
                </div>
                <div className="mt-4">
                  {preImg.map((item, index) => (
                    <div
                      key={index}
                      className="text-stone-300 text-xl font-medium underline"
                    >
                      <a
                        href={item.file ? URL.createObjectURL(item.file) : ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col max-md:max-w-full max-md:mt-9">
              <div className="text-stone-100 text-xl font-medium ml-7 max-md:ml-2.5">
                Product Name
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] w-[597px] max-w-full mt-2.5 pt-6 pb-5 rounded-[50px] max-md:pl-2 flex">
                <input
                  type="text"
                  id="productName"
                  className="focus:outline-none bg-[#40477B] grow px-5 rounded-xl"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-3 max-md:ml-2.5">
                Description
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] max-w-full mt-1.5 pt-6 pb-5 px-5 rounded-[50px] max-md:pl-2">
                <textarea
                  id="description"
                  className="bg-[#40477B] flex grow flex-1 mx-2 rounded-xl focus:outline-none"
                  rows={2}
                  cols={48}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 max-md:ml-2.5 mt-3">
                Address
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] w-[597px] max-w-full mt-2.5 pt-6 pb-5 rounded-[50px] max-md:pl-2 flex">
                <input
                  type="text"
                  id="address"
                  className="focus:outline-none bg-[#40477B] grow px-5 rounded-xl"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 max-md:ml-2.5 mt-3">
                Quantity
              </div>
              <div className="text-neutral-300 text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] w-[200px] max-w-full mt-2.5 pt-6 pb-5 rounded-[50px] max-md:pl-2 flex">
                <input
                  type="number"
                  id="quantity"
                  className="focus:outline-none bg-[#40477B] w-[200px] px-5 rounded-xl text-center"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-5 max-md:ml-2.5">
                Your bid starts at
              </div>
              <div className="flex max-w-full items-start gap-5 mt-1 max-md:ml-px">
                <div className="rounded-full bg-[#FF8BBC] w-[70px] h-[70px] flex items-center flex-col justify-center shadow-black shadow-inner my-2.5">
                  <Image
                    src="/images/icons/Light-bulb.svg"
                    alt="logo"
                    className="self-center"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="bg-[#40477B] mt-3 max-md:pl-2 w-32 flex flex-col py-2 rounded-[50px] text-xl font-medium shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)]">
                  <input
                    type="number"
                    id="startPrice"
                    className="focus:outline-none text-2xl flex-grow min-h-[50px] bg-[#40477B] rounded-[50px] text-stone-100 text-center px-2"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="text-stone-100 text-xl font-medium ml-7 mt-1 max-md:ml-2.5">
                Expiration date
              </div>
              <div className="bg-[#40477B] rounded-[50px] h-12 w-52 mx-3 mt-2.5 flex flex-col justify-center shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)] py-8">
                <div className="flex flex-row items-center">
                  <DatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                    // handleDateChange={handleDateChange}
                  />
                  {
                    <Image
                      src="/images/icons/calendar.svg"
                      alt="calendar-icon"
                      className="self-center mr-3"
                      width={34}
                      height={34}
                    />
                  }
                </div>
              </div>
              <div className="flex h-9 flex-col flex-1" />

              <div className="text-stone-100 text-xl font-medium ml-7 mt-4 max-md:ml-2.5 mb-2">
                Expiration time
              </div>
              <div className="flex max-w-full items-start gap-3 ml-5 max-md:justify-center">
                <input
                  id="hr"
                  type="number"
                  defaultValue={currentTime.hr}
                  min="0"
                  max="23"
                  className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-[50px] text-2xl shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)]"
                  onChange={(e) => handleTime(e)}
                />
                <div className="text-neutral-300 text-xl font-medium self-center my-auto">
                  :
                </div>
                <input
                  id="min"
                  type="number"
                  defaultValue={currentTime.min}
                  min="0"
                  max="60"
                  className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-[50px] text-2xl shadow-[8px_8px_15px_5px_rgba(0,0,0,0.15)]"
                  onChange={(e) => handleTime(e)}
                />

                {/* <div className="text-neutral-300 text-xl font-medium self-center my-auto">
                  :
                </div>
                <input type="number" className="w-[60px] h-[60px] text-center bg-[#40477B] text-stone-100 rounded-lg text-2xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-center flex w-[414px] max-w-full items-start justify-between gap-5 mr-8 mt-28 mb-8 pr-5 max-md:flex-wrap max-md:justify-center max-md:mr-2.5 max-md:mt-10">
        <button
          className="shadow-[6px_10px_30px_0px_rgba(45,124,188,0.42)_inset,3px_4px_7px_0px_rgba(0,0,0,0.20)_inset] bg-sky-400 self-center flex w-[178px] max-w-full flex-col m-auto px-5 py-3 rounded-[50px]"
          onClick={handleSubmit}
        >
          <span className="text-stone-100 text-center text-3xl font-semibold self-center">
            Submit
          </span>
        </button>
      </footer>
      <BlockUI block={block} setBlock={setBlock} />
    </main>
  );
}

export default sellItem;
